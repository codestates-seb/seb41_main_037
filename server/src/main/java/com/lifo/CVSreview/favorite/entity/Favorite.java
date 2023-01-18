package com.lifo.CVSreview.favorite.entity;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Favorite extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long favoriteId;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

    @Column(nullable = false, updatable = true, unique = false)
    private String ProductName;

    public Favorite(Member member, Product product) {
        this.member = member;
        this.product = product;
    }
}
