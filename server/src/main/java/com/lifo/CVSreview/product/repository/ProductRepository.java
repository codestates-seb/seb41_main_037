package com.lifo.CVSreview.product.repository;

import com.lifo.CVSreview.product.entity.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findProductsByProductNameContaining(String productName, Pageable pageable);


/**
 *  단순 상품명 검색 /search?key=초코
 * 1. 최신 상품 순으로 조회 createAt Desc /search?sort=createdAt,desc&key=초코
 * 2. 오래된 상품 순으로 조회 createAt Asc /search?sort=createdAt,asc&key=초코
 * 3. 찜이 많은 순으로 조회  favoriteProduct Desc /search?sort=favoriteProduct,desc&key=초코
 * 4. 찜이 적은 순으로 조회  favorit Product Asc /search?sort=favoriteProduct,asc&key=초코
 * 5. 리뷰가 많은 순으로 조회 reviewCount Desc /search?sort=reviewCount,desc&key=초코
 * 6. 리뷰가 적은 순으로 조회 reviewCount Asc /search?sort=reviewCount,asc&key=초코
 */


}
