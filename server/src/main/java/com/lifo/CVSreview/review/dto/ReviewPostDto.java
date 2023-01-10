package com.lifo.CVSreview.review.dto;

import com.lifo.CVSreview.validator.NotSpace;
import lombok.Getter;
import javax.validation.constraints.Size;

@Getter
public class ReviewPostDto {
    @Size(min = 5, message = "5자 이상부터 입력 가능")
    private String content;
    private int rating;
}
