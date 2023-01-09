package com.lifo.CVSreview.product.dto;

import com.lifo.CVSreview.product.entity.ProductImg;
import lombok.Getter;
import lombok.Setter;
import org.modelmapper.ModelMapper;

// 상품 저장 후 상품이미지에 대한 데이터를 전달할 DTO클래스
@Getter
@Setter
public class ProductImgDto {
    private Long id;

    private String imgName;

    private String imgUrl;

    private String oriImgName;

    private static ModelMapper modelMapper = new ModelMapper();
    //modelmapper라이브러리는 서로 다른 클래스의 값을 필드의 이름과 자료형이 같으면 getter setter를 통해 값을 복사해서 객체를 반환해줌

    public static ProductImgDto of(ProductImg productImg) {
        return modelMapper.map(productImg,ProductImgDto.class);
    }
    // productImg 엔티티 객체를 파라미터로 받아서 productImg 객체의 자료형과 멤버변수의 이름이 같을 때 productImgDto로 값을 복사해서 반환
        //static 메소드로 선언해 productImgDto 객체를 생성하지 않아도 호출할 수 있도록 함

}
