package com.lifo.CVSreview.review.entity;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.validator.NotSpace;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Review extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long reviewId;

    @Column(length = 500, nullable = false, updatable = true, unique = false)
    private String content;

    @Column(nullable = false, updatable = true, unique = false)
    private int rating ;

//    @Column(nullable = true, updatable = true, unique = false)
//    private Product.ProductCategory ProductCategory ;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

    public void addMember(Member member) {
        this.member = member;
    }
}