package com.lifo.CVSreview.review.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ReviewResponseDto {
    private int reviewId;
    private String content;
    private String createdAt;
    private String modifiedAt;
    private int rating;
    private String username;
    private int productId;
    public void setUsername(String username) {
        this.username = username;
    }
}
