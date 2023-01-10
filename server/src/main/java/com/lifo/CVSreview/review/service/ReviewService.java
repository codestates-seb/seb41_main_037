package com.lifo.CVSreview.review.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.member.service.MemberService;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.service.ProductService;
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

    private final ProductService productService;
    private final MemberService memberService;

    public ReviewService(ReviewRepository reviewRepository, ReviewMapper reviewMapper,
                         ProductService productService, MemberService memberService) {
        this.reviewRepository = reviewRepository;
        this.reviewMapper = reviewMapper;
        this.productService = productService;
        this.memberService = memberService;
    }

    //리뷰작성
    //
    public Review createReview(Review review,int product_id) {
        verifyExistReview(review.getReviewId());//새로운 리뷰인지 확인
        review.setMember(memberService.findMember(1L));
        Product product2 = productService.find(product_id);
        review.setProduct(product2);
        reviewRepository.save(review); //새로운 리뷰 저장
        Product product = review.getProduct();//리뷰가 가지고 있는 productId를 가지고 있는 product 찾아옴.
        product.setReviewCount((product.getReviewCount())+1); //product가 가지고 있는 ReviewCount를 +1 증가시킴.
        product.setRating(findProductReviews(product));//findProductReviews 메소드를 이용해서 리뷰 평점 계산 후 평점 저장.
        productService.updateProduct(product);// 제품 평점 및 리뷰 갯수 업데이트.
        return review;
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
    public int findProductReviews(Product product) {
        List<Review> reviews = reviewRepository.findByproduct(product);
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
    //삭제 후 평점 재조정
    public void deleteReview(int reviewId) {
        Review findReview = findVerifiedReview(reviewId); //전달받은 reviewId에 일치하는 리뷰 가져오기. 없다면 예외처리
        long productId = findReview.getProduct().getProductId();//리뷰가 가지고 있는 Product를 이용해서 ProductId 가져옴
        Product product = productService.find(productId);//findReivew가 가지고 있는 productId를 가지고 있는 product 찾아옴.
        product.setReviewCount((product.getReviewCount())-1); //product가 가지고 있는 ReviewCount를 -1
        reviewRepository.delete(findReview); //리뷰삭제
        product.setRating(findProductReviews(product));//findProductReviews 메소드를 이용해서 리뷰 평점 계산 후 평점 저장.
        productService.updateProduct(product);// 제품 평점 및 리뷰 갯수 업데이트.
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
