package com.lifo.CVSreview.review.controller;

import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.review.dto.ReviewPatchDto;
import com.lifo.CVSreview.review.dto.ReviewPostDto;
import com.lifo.CVSreview.review.entity.Review;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.service.ReviewService;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Slf4j
@Validated
@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    public ReviewController(ReviewService questionService, ReviewMapper mapper) {
        this.reviewService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/{product-id}")
    @ApiOperation(value="리뷰 작성", notes="상품에 리뷰를 작성하는 api입니다.")
    public ResponseEntity postReview(@Valid @RequestBody ReviewPostDto reviewPostDto,
                                     @PathVariable("product-id") long product_id) {

        Review findReview = reviewService.createReview(mapper.reviewPostDtoToReview(reviewPostDto),product_id);
        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(findReview),HttpStatus.CREATED);
    }

    @PatchMapping("{review-id}")
    @ApiOperation(value="리뷰 수정", notes="리뷰를 수정하는 api입니다.")
    public ResponseEntity patchReview(
            @PathVariable("review-id") @Positive long reviewId,
            @Valid @RequestBody ReviewPatchDto reviewPatchDto) {
        reviewPatchDto.setReviewId(reviewId);
        Review review = reviewService.updateReview(mapper.reviewPatchDtoToReview(reviewPatchDto));

        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(review),HttpStatus.OK);
    }

    @GetMapping("/{review-id}")
    @ApiOperation(value="리뷰 불러오기", notes="reviewId에 해당하는 리뷰를 가져오는 api입니다.")
    public ResponseEntity getReview(
            @PathVariable("review-id") @Positive long reviewId){
        Review findReview = reviewService.findReview(reviewId);
        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(findReview),HttpStatus.OK);
    }

    @GetMapping("/search")
    @ApiOperation(value="리뷰 검색", notes="키워드를 이용해서 리뷰를 검색하는 api입니다." +
            "ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/reviews/search?search=바나나")
    public ResponseEntity searchReview(@RequestParam String search){
        List<Review> reviews =reviewService.searchReview(search);
        return new ResponseEntity<>(mapper.reviewsToReviewResponseDtos(reviews),HttpStatus.OK);
    }

    @GetMapping
    @ApiOperation(value="리뷰 페이지네이션으로 불러오기", notes="리뷰를 페이지네이션으로 불러오는 api입니다."
            + " ec2-13-124-162-199.ap-northeast-2.compute.amazonaws.com:8080/reviews?page=1&size=3")
    public ResponseEntity getReviews(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Review> pageReviews = reviewService.findReviews(page-1, size);
        List<Review> reviews = pageReviews.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.reviewsToReviewResponseDtos(reviews),
                        pageReviews),
                HttpStatus.OK);
    }


    @DeleteMapping("/{review-id}")
    @ApiOperation(value="리뷰 삭제", notes="리뷰를 삭제하는 api입니다.")
    public ResponseEntity deleteQuestion(@PathVariable("review-id") int reviewId) {
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
