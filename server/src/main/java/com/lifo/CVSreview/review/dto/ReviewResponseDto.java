package com.lifo.CVSreview.review.dto;

import com.lifo.CVSreview.product.entity.Product;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponseDto {
    private long reviewId;
    private String content;
    private String createdAt;
    private String modifiedAt;
    private int rating;
    private String username;
    private long memberId;
    private long productId;
    private Product.ProductCategory productCategory;

    public void setUsername(String username) {
        this.username = username;
    }
}
