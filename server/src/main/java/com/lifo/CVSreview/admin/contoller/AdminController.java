package com.lifo.CVSreview.admin.contoller;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final ReviewService reviewService;

    @DeleteMapping("/reviews/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") int reviewId) {
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}