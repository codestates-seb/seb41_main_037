package com.lifo.CVSreview.product.entity;

import com.lifo.CVSreview.audit.Auditable;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "product_img")
@Getter @Setter
public class ProductImg extends Auditable {
    @Id
    @Column(name = "product_img_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String imgName; // 이미지 파일명

    private String oriImgName;  // 원본 이미지 파일명
    private String imgUrl;  // 이미지 조회 경로


    public void updateProductImg(String imgName, String imgUrl, String oriImgName){        // 원본 이미지 파일명, 이미지 경로를 파라미터로 입력 받아서 이미지 정보를 업데이트하는 메소드
        this.imgName = imgName;
        this.imgUrl = imgUrl;
        this.oriImgName = oriImgName;
    }
}
