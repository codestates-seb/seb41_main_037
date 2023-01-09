package com.lifo.CVSreview.product.repository;

import com.lifo.CVSreview.product.entity.ProductImg;
import org.springframework.data.jpa.repository.JpaRepository;



// 상품의 이미지 정보를 저장하기 위해 만드는 인터페이스
public interface ProductImgRepository extends JpaRepository<ProductImg, Long> {

}
