package com.lifo.CVSreview.review.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
@Getter
public class ReviewPatchDto {
    private int reviewId;

    @Size(min = 10, message = "10자 이상부터 입력 가능")
    private String content;
    private int rating;

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }
}
