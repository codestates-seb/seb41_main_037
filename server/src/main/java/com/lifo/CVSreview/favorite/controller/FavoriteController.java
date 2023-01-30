package com.lifo.CVSreview.favorite.controller;

import com.lifo.CVSreview.auth.utils.SecurityUtil;
import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.favorite.mapper.FavoriteMapper;
import com.lifo.CVSreview.favorite.repository.FavoriteRepository;
import com.lifo.CVSreview.favorite.service.FavoriteService;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.repository.MemberRepository;
import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.mapper.ProductMapper;
import com.lifo.CVSreview.product.repository.ProductRepository;
import com.lifo.CVSreview.review.dto.ReviewPostDto;
import com.lifo.CVSreview.review.entity.Review;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
//@RequestMapping("/favorite")
@AllArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;
    final private FavoriteRepository favoriteRepository;
    final private ProductRepository productRepository;
    final private ProductMapper mapper;
    final private MemberRepository memberRepository;

    @GetMapping("/favorite/{product-id}")
    @ApiOperation(value="좋아요 등록/취소", notes="좋아요를 등록 및 취소하는 api입니다. 등록 시 200 ok, 취소 시 204 No_Content")
    public ResponseEntity postFavorite(@PathVariable("product-id") long productId) {
        if (favoriteService.createFavorite(productId, memberRepository.findByEmail(SecurityUtil.getCurrentMemberId()).get())){
            return new ResponseEntity<>(HttpStatus.OK); //좋아요를 눌렀다면 
        }else{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 좋아요를 취소했다면
        }
    }

    @GetMapping(value = "/getFavorites")
    @ApiOperation(value="주간 베스트상품", notes="일주일 간 좋아요를 제일 많이 받은 상품 10개를 가져옵니다.")
    public ResponseEntity<List<ProductDto.Response>> getFavorites() {

        LocalDateTime before7Days = LocalDateTime.now().minusDays(7); // 현재날짜에서 -7
        // 최근 7일간 찜을 많이 받은 상품 id 순으로 list 를 가져온다
        List<Long> list = favoriteRepository.findFavorites(before7Days);

        // 만약 찜을 받은 상품 종류가 10개 미만이라면, 찜을 받은 최대 개수만큼으로 list 범위 지정
        int maxIndex = list.size() < 10 ? list.size() : 10;

        // list 내 지정된 범위 row 삭제
        // 10개만 출력하고 싶으니, 3개부터 list 끝까지 삭제
        list.subList(maxIndex, list.size()).clear();

        // 순서 유지를 위해 반복문을 통한 list add
        List<Product> bestProducts = new ArrayList<Product>();

        for (int i = 0; i < maxIndex; bestProducts.add(productRepository.findById(list.get(i++)).get()));

        return new ResponseEntity<>(mapper.entitysToResponses(bestProducts), HttpStatus.OK);
    }





//    @DeleteMapping("/{product-id}")
//    public ResponseEntity deleteFavorite(@PathVariable("product-id") long productId) {
//        Member member = new Member(); // 테스트를 위해 멤버를 만들어서
//        member.setMemberId(1L); // memberId를 1로 세팅. 추후에 Security 구현하면서 변경 필요
//        favoriteService.deleteReview(productId,member);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
