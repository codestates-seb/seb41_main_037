package com.lifo.CVSreview.review.dto;

import com.lifo.CVSreview.validator.NotSpace;
import lombok.Getter;
import javax.validation.constraints.Size;

@Getter
public class ReviewPostDto {
    @Size(min = 5, message = "5자 이상부터 입력 가능")
    private String content;
    private int rating;
    private int productId; //postman에서 필드값을 안넣어도 자동으로 0이 입력되는데 아무것도 지정안하면 에러뜨게 하고 싶은데 방법을 모르겠음.
}
