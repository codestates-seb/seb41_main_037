package com.lifo.CVSreview.review.entity;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import com.lifo.CVSreview.validator.NotSpace;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Review extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reviewId;

    @Column(length = 500, nullable = false, updatable = true, unique = false)
    private String content;

    @Column(nullable = false, updatable = true, unique = false)
    private int rating ;

    @Column(nullable = false, updatable = false, unique = false)
    private int productId;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
//
//    @ManyToOne
//    @JoinColumn(name = "PRODUCT_ID")
//    private Product product;
}