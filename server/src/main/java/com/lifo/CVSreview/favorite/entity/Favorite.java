package com.lifo.CVSreview.favorite.entity;

import com.lifo.CVSreview.audit.BaseTimeEntity;
import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
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

    @Column(name = "ni_rg_dt")
    LocalDateTime niRgDt;

    @Column(nullable = false, updatable = true, unique = false)
    private String ProductName;

    @PrePersist
    public void createdAt() {
        this.niRgDt = LocalDateTime.now();
    }

    public Favorite(Member member, Product product) {
        this.member = member;
        this.product = product;
    }
}
