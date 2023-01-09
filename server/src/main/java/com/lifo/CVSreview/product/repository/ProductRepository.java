package com.lifo.CVSreview.product.repository;

import com.lifo.CVSreview.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

//    List<Product> findByProductName(String productName);
//

}
