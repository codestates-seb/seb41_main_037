package com.lifo.CVSreview.product.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.repository.ProductRepository;
import com.lifo.CVSreview.review.entity.Review;
import com.lifo.CVSreview.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final ReviewRepository reviewRepository;

    /*상품등록*/
    public Product create(Product product) {

        return productRepository.save(product);
    }


    //상품수정
    public Product updateProduct(Product product) {
        Product findProduct = findVerifiedProduct(product.getProductId());

        Optional.ofNullable(product.getProductCategory())
                .ifPresent(productCategory -> findProduct.setProductCategory(product.getProductCategory()));
        Optional.ofNullable(product.getProductName())
                .ifPresent(name -> findProduct.setProductName(product.getProductName()));
        Optional.ofNullable(product.getPrice())
                .ifPresent(price -> findProduct.setPrice(product.getPrice()));
        Optional.ofNullable(product.getProductName())
                .ifPresent(imgName -> findProduct.setImgName(product.getImgName()));
        Optional.ofNullable(product.getImgUrl())
                .ifPresent(imgUrl -> findProduct.setImgUrl(product.getImgUrl()));


        return productRepository.save(findProduct);
    }

    /*상품 한 개 조회하기
     */
    public Product find(long productId) {

        return findVerifiedProduct(productId);
    }

    //상품 여러 개 조회하기
    public Page<Product> findAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    /*상품 삭제 */
    public void delete(long productId) {
        Product find = findVerifiedProduct(productId); // 전달받은 productId와 일치하는 상품 가져오기
        reviewRepository.deleteAllById(
                find.getReviews()
                        .stream().map(Review::getReviewId)
                        .collect(Collectors.toList())
        );
        productRepository.delete(find);
    }

    //매개변수로 넘어온 productId를 DB에서 가져오기
    public Product findVerifiedProduct(long productId) {
        Optional<Product> optionalProduct =
                productRepository.findById(productId);
        Product findProduct =
                optionalProduct.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        return findProduct;
    }


    //상품 검색
    @Transactional
    public Page<Product> search(Map<String, String> params, Pageable pageable) {
        // ?key=초코&category=CU
        // ?key=초코
        String key = params.get("key");
        String category = params.get("category");
        if (category != null & category.length() > 0) {
            Product.ProductCategory getCategory  = Product.ProductCategory.valueOf(category);
            return productRepository.findProductsByProductCategoryAndProductNameContaining(
                    getCategory,
                    key,
                    pageable);
        } else {
            return productRepository.findProductsByProductNameContaining(
                    key,
                    pageable);
        }
    }

}
