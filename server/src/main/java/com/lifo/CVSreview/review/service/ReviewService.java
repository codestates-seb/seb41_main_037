package com.lifo.CVSreview.review.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.review.entity.Review;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;

    public ReviewService(ReviewRepository reviewrepository, ReviewMapper reviewMapper) {
        this.reviewRepository = reviewrepository;
        this.reviewMapper = reviewMapper;
    }

    public Review createReview(Review review) {
        verifyExistReview(review.getReviewId());
        return reviewRepository.save(review);
    }

    public Review updateReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());

        Optional.ofNullable(review.getContent())
                .ifPresent(content -> findReview.setContent(content));
        Optional.ofNullable(review.getRating())
                .ifPresent(rating -> findReview.setRating(rating));

        return reviewRepository.save(findReview);
    }

    public Review findReview(int reviewId) {
        return findVerifiedReview(reviewId);
    }

    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    public void deleteReview(int reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        reviewRepository.delete(findReview);
    }

    public Review findVerifiedReview(int reviewId) {
        Optional<Review> optionalMember =
                reviewRepository.findById(reviewId);
        Review findReview =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }

        private void verifyExistReview(int reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        if(optionalReview.isPresent()){
            throw new BusinessLogicException(ExceptionCode.REVIEW_EXISTS);
        }
    }
}
