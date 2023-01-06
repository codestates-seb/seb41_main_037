package com.lifo.CVSreview.product.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(length = 15, nullable = false)
    private String productName;

    @Column(length = 15, nullable = false)
    private String price;

    @Column(length = 200, nullable = false)
    private String image_name;

    @Column(length = 200, nullable = false)
    private String image_path;


//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
//
//    public void setMember(Member member) {
//        this.member = member;
//        if(!this.member.getProducts().contains(this)) {
//            this.member.getProducts().add(this);
//        }
//    }



}
