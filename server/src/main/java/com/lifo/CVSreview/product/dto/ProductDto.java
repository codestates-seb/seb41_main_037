package com.lifo.CVSreview.product.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
        public static class Post {
                private Long productId;
                private String productName;
                private int price;
                private String image_name;
                private String image_path;
        }

        public static class Patch {
                private Long productId;
                private String productName;
                private int price;
                private String image_name;
                private String image_path;
        }

        public static class Response {
                private Long productId;
                private String productName;
                private int price;
                private String image_name;
                private String image_path;
        }
}
