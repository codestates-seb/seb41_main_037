package com.lifo.CVSreview.favorite.controller;

import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.favorite.mapper.FavoriteMapper;
import com.lifo.CVSreview.favorite.service.FavoriteService;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.review.dto.ReviewPostDto;
import com.lifo.CVSreview.review.entity.Review;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/favorite")
@AllArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;
    private final FavoriteMapper mapper;

    @PostMapping("/{product-id}")
    public ResponseEntity postFavorite(@PathVariable("product-id") long productId) {
        Member member = new Member(); //테스트를 위해 멤버를 만들어서
        member.setMemberId(1L); // memberId를 1로 세팅. 추후에 Security 구현하면서 변경 필요
        if (favoriteService.createFavorite(productId, member)) {
            return new ResponseEntity<>(HttpStatus.OK); //좋아요를 눌렀다면 
        }else{
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 좋아요를 취소했다면
        }
    }

//    @DeleteMapping("/{product-id}")
//    public ResponseEntity deleteFavorite(@PathVariable("product-id") long productId) {
//        Member member = new Member(); // 테스트를 위해 멤버를 만들어서
//        member.setMemberId(1L); // memberId를 1로 세팅. 추후에 Security 구현하면서 변경 필요
//        favoriteService.deleteReview(productId,member);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
