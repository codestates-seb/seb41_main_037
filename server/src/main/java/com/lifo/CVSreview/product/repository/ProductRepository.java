package com.lifo.CVSreview.product.repository;

import com.lifo.CVSreview.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
