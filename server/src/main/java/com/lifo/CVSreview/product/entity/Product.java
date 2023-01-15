package com.lifo.CVSreview.product.entity;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import com.lifo.CVSreview.review.entity.Review;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class Product extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(length = 15, nullable = false)
    private String productName; // 상품명

    @Column(length = 15, nullable = false)
    private int price;  // 상품 가격

    @Column
    private int rating; // 별점

    @Column(nullable = false)
    private String imgName; // 상품 이미지 이름

    @Column(nullable = false)
    private String imgUrl;  // 상품 이미지 경로

    @Column
    private int reviewCount;  //리뷰수

    @Column
    private int favoriteProduct; //찜

    //상품과 리뷰는 1 : N 관계
    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Review> reviews = new ArrayList<>();

    //상품과 리뷰 연관관계 편의 메서드
    void addReview(Review review) {
        this.getReviews().add(review);
        review.setProduct(this);
    }

//    상품과 찜은 1 : N 관계
//    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
//    private List<FavoriteProduct> FavoriteProducts = new ArrayList<>();
//
//    public void setFavoriteProduct(FavoriteProduct favoriteProduct) {
//        this.getFavoriteProducts().add(favoriteProduct);
//        favoriteProduct.setProduct(this);
//    }
}//
