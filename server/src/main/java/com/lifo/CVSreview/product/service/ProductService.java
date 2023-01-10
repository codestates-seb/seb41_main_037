package com.lifo.CVSreview.product.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product create(Product product) {


     return productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        Product findProduct = findVerifiedProduct(product.getProductId());

        Optional.of(product.getProductName())
                .ifPresent(name -> findProduct.setProductName(product.getProductName()));
        Optional.of(product.getPrice())
                .ifPresent(price -> findProduct.setPrice(product.getPrice()));
        Optional.ofNullable(product.getProductName())
                .ifPresent(imgName -> findProduct.setImgName(product.getImgName()));
        Optional.ofNullable(product.getImgUrl())
                .ifPresent(imgUrl-> findProduct.setImgUrl(product.getImgUrl()));


        return productRepository.save(findProduct);
    }

    public Product find(long productId) {
        return findVerifiedProduct(productId);
    }

    public Page<Product> findAll(int page, int size) {
        return productRepository.findAll(PageRequest.of(page, size,
                Sort.by("productId").descending()));
    }

    public void delete(long productId){
        Product product = findVerifiedProduct(productId);
        productRepository.delete(product);
    }

    public Product findVerifiedProduct(long productId) {
        Optional<Product> optionalProduct =
                productRepository.findById(productId);
        Product findProduct =
                optionalProduct.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        return findProduct;
    }
}
