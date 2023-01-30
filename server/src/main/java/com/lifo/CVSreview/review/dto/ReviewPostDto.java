package com.lifo.CVSreview.review.dto;

import com.lifo.CVSreview.validator.NotSpace;
import lombok.Getter;
import javax.validation.constraints.Size;

@Getter
public class ReviewPostDto {
    private String content;
    private int rating;
}
