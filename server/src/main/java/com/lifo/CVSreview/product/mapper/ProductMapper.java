package com.lifo.CVSreview.product.mapper;

import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product postToEntity(ProductDto.Post post);

    Product patchToEntity(ProductDto.Patch patch);

    ProductDto.Response entityToResponse(Product product);

    List<ProductDto.Response> entitysToResponses(List<Product> products);


    default ReviewResponseDto reviewToReviewResponseDto(Review review) {
        if ( review == null ) {
            return null;
        }

        ReviewResponseDto reviewResponseDto = new ReviewResponseDto();

        reviewResponseDto.setReviewId( review.getReviewId() );
        reviewResponseDto.setContent( review.getContent() );
        reviewResponseDto.setCreatedAt( review.getCreatedAt() );
        reviewResponseDto.setModifiedAt( review.getModifiedAt() );
        reviewResponseDto.setRating( review.getRating() );
        reviewResponseDto.setProductId(review.getProduct().getProductId());
        reviewResponseDto.setMemberId(review.getMember().getMemberId());
        reviewResponseDto.setUsername(review.getMember().getNickname());

        return reviewResponseDto;
    }
}//