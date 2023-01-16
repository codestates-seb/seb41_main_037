package com.lifo.CVSreview.favorite.entity;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.entity.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int favoriteId;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

    public Favorite(Member member, Product product) {
        this.member = member;
        this.product = product;
    }
}
