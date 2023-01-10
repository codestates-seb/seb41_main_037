package com.lifo.CVSreview.product.entity;

import com.lifo.CVSreview.audit.Auditable;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
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
    private String imgName;

    @Column(nullable = false)
    private String imgUrl;

    @Column
    private int reviewCount;


//   //상품과 회원은 N : 1 관계
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
//    //연관관계 편의 메서드
//    public void setMember(Member member) {
//        this.member = member;
//        if(!this.member.getProducts().contains(this)) {
//            this.member.getProducts().add(this);
//        }
//   }
//    //상품과 찜은 1 : N 관계
//    @OneToMany(mappedBy = "product", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
//    private List<FavoriteProduct> FavoriteProducts = new ArrayList<>();
//
//    public void setFavoriteProduct(FavoriteProduct favoriteProduct) {
//        this.getFavoriteProducts().add(favoriteProduct);
//        favoriteProduct.setProduct(this);
//    }
}
