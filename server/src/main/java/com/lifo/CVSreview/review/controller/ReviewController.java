package com.lifo.CVSreview.review.controller;

import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.review.dto.ReviewPatchDto;
import com.lifo.CVSreview.review.dto.ReviewPostDto;
import com.lifo.CVSreview.review.entity.Review;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.service.ReviewService;
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
    public ResponseEntity postReview(@Valid @RequestBody ReviewPostDto reviewPostDto,
                                     @PathVariable("product-id") long product_id) {
        Review findReview = reviewService.createReview(mapper.reviewPostDtoToReview(reviewPostDto),product_id);
        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(findReview),HttpStatus.CREATED);
    }

    @PatchMapping("{review-id}")
    public ResponseEntity patchReview(
            @PathVariable("review-id") @Positive long reviewId,
            @Valid @RequestBody ReviewPatchDto reviewPatchDto) {
        reviewPatchDto.setReviewId(reviewId);
        Review review = reviewService.updateReview(mapper.reviewPatchDtoToReview(reviewPatchDto));

        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(review),HttpStatus.OK);
    }

    @GetMapping("/{review-id}")
    public ResponseEntity getReview(
            @PathVariable("review-id") @Positive long reviewId){
        Review findReview = reviewService.findReview(reviewId);
        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(findReview),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getReviews(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Review> pageReviews = reviewService.findReviews(page-1, size);
        List<Review> reviews = pageReviews.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.reviewsToReviewResponseDtos(reviews),
                        pageReviews),
                HttpStatus.OK);
    }

    /*
    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteQuestion(@PathVariable("review-id") int reviewId) {
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
     */
}
