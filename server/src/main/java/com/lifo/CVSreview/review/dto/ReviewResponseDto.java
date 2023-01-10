package com.lifo.CVSreview.review.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponseDto {
    private int reviewId;
    private String content;
    private String createdAt;
    private String modifiedAt;
    private int rating;
    private String username;
    private long memberId;
    private long productId;


    public void setUsername(String username) {
        this.username = username;
    }
}
