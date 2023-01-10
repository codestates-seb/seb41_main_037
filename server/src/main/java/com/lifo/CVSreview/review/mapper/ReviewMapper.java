package com.lifo.CVSreview.review.mapper;

import com.lifo.CVSreview.review.dto.ReviewPatchDto;
import com.lifo.CVSreview.review.dto.ReviewPostDto;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewPostDtoToReview(ReviewPostDto reviewPostDto);
    Review reviewPatchDtoToReview(ReviewPatchDto reviewPatchDto);
    ReviewResponseDto reviewToReviewResponseDto(Review review);
    List<ReviewResponseDto> reviewsToReviewResponseDtos(List<Review> reviews);

//    default ReviewResponseDto reviewToReview(Review review){
//        if(review==null) return null;
//
//        ReviewResponseDto response = new ReviewResponseDto(
//                review.getReviewId(),
//                review.getContent(),
//                review.getCreatedAt(),
//                review.getModifiedAt(),
//                review.getRating(),
//                review.getMember().getNickname(),
//                review.getMember().getMemberId(),
//                review.getProduct().getProductId()
//        );
//        return response;
//    }
}


