package com.lifo.CVSreview.favorite.service;

import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.favorite.mapper.FavoriteMapper;
import com.lifo.CVSreview.favorite.repository.FavoriteRepository;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.repository.MemberRepository;
import com.lifo.CVSreview.member.service.MemberService;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.service.ProductService;
import com.lifo.CVSreview.review.entity.Review;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FavoriteService {
    private final ProductService productService;
    private final FavoriteRepository favoriteRepository;

    private final MemberRepository memberRepository;

    public boolean createFavorite(long product_id, Member member) {
        Favorite favorite = new Favorite(); //이렇게 하면 안될 거 같은데.. 이거말곤 방법이 떠오르질 않음.
        Product product = productService.find(product_id); // 인자로 받은 productId에 해당하는 product 가져옴

        favorite.setMember(member);
        favorite.setProduct(product);

        if(isNotAlreadyFavorite(member, product)){
            product.setFavoriteCount(product.getFavoriteCount()+1); //product의 좋아요 개수 +1
            productService.updateProduct(product); // 좋아요 개수 업데이트
            favoriteRepository.save(favorite);
            return true;
        }else{
            product.setFavoriteCount(product.getFavoriteCount()-1); //product의 좋아요 개수 -1
            productService.updateProduct(product); // 좋아요 개수 업데이트
            favoriteRepository.delete(favoriteRepository.findByMemberAndProduct(member, product));
            return false;
        }
    }

    //인자로 전달받은 memberId가 좋아요를 누른 상품목록을 리스트로 반환
    public List<Favorite> MemberFavorite(long memberId) {
        Optional<Member> member = memberRepository.findById(memberId);
        Member member2= member.get();
        return favoriteRepository.findByMember(member2);
    }

    //사용자가 이미 좋아요를 했는지 확인.
    private boolean isNotAlreadyFavorite(Member member, Product product) {
        Favorite favorite = favoriteRepository.findByMemberAndProduct(member, product);//
        if (favorite == null) { // 존재하지 않는다면 true
            return true;
        } else { //존재한다면 false;
            return false;
        }
    }



}