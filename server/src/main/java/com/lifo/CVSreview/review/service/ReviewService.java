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
    //리뷰작성
    public Review createReview(Review review) {
        verifyExistReview(review.getReviewId());
        return reviewRepository.save(review);
    }

    //리뷰수정
    //내용만 수정할 수도 있고, 평점만 수정할 수 도 있기에 Optional를 이용해 null값을 받을 수 있도록 설정.
    public Review updateReview(Review review) {
        Review findReview = findVerifiedReview(review.getReviewId());

        Optional.ofNullable(review.getContent())
                .ifPresent(content -> findReview.setContent(content));
        Optional.ofNullable(review.getRating())
                .ifPresent(rating -> findReview.setRating(rating));

        return reviewRepository.save(findReview);
    }

    //리뷰 1개 찾아오기
    //매개변수로 넘어온 reviewId와 일치하는 리뷰를 가져옴.
    public Review findReview(int reviewId) {
        return findVerifiedReview(reviewId);
    }

    //매개변수로 넘어온 productId를 가진 리뷰의 평점을 반환.
    //Stream으로 멋있게 하고 싶었으나 머리가 안되서 일단 초딩수준으로 구현.
    //추후 Stream 공부 후 변경예정
    public int findProductReviews(int productId) {
        List<Review> reviews = reviewRepository.findByproductId(productId);
        int reviewSize = reviews.size();
        int total = 0;
        for(int i=0; i<reviewSize; i++){
            total += reviews.get(i).getRating();
        }
        return total/reviewSize;
    }



    //리뷰 모두 여려 개 가져오기
    //페이지네이션을 이용해서 매개변수로 넘어온 page와 size에 맞는 리뷰를 여려 개 가져옴.
    public Page<Review> findReviews(int page, int size) {
        return reviewRepository.findAll(PageRequest.of(page, size,
                Sort.by("reviewId").descending()));
    }

    //리뷰삭제
    //매개변수로 넘어온 reviewId와 일치하는 리뷰를 db에서 삭제.
    public void deleteReview(int reviewId) {
        Review findReview = findVerifiedReview(reviewId);
        reviewRepository.delete(findReview);
    }

    //매개변수로 넘어온 reviewId를 DB에서 가져오기
    //존재하지 않는다면 예외처리
    public Review findVerifiedReview(int reviewId) {
        Optional<Review> optionalMember =
                reviewRepository.findById(reviewId);
        Review findReview =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));
        return findReview;
    }

    //리뷰가 존재한다면 예외처리
    //없는 리뷰라면 그대로 통과
    private void verifyExistReview(int reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        if(optionalReview.isPresent()){
            throw new BusinessLogicException(ExceptionCode.REVIEW_EXISTS);
        }
    }
}
