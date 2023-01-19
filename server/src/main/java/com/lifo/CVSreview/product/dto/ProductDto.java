package com.lifo.CVSreview.product.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
public class ProductDto {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {

        @NotBlank(message = "상품명은 필수 입력 값입니다.")
        private String productName;

        @NotNull(message = "가격은 필수 입력 값입니다.")
        private int price;

        private String imgName;

        private String imgUrl;

        private String productCategory;


    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long productId;

        @NotBlank(message = "상품명은 필수 입력 값입니다.")
        private String productName;

        @NotNull(message = "가격은 필수 입력 값입니다.")
        private int price;

        private String imgName;

        private String imgUrl;

        private String productCategory;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {

        private Long productId;

        private String productName;

        private int price;

        private String imgName;

        private String imgUrl;

        private int rating;

        private int reviewCount;

        private int favoriteCount;

        private String productCategory;

    }
}
