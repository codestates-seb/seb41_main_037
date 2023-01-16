package com.lifo.CVSreview.product.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    /*상품등록*/
    public Product create(Product product) {

        return productRepository.save(product);
    }


    //상품수정
    public Product updateProduct(Product product) {
        Product findProduct = findVerifiedProduct(product.getProductId());

        Optional.of(product.getProductName())
                .ifPresent(name -> findProduct.setProductName(product.getProductName()));
        Optional.of(product.getPrice())
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
    public Page<Product> findAll(int page, int size) {
        return productRepository.findAll(PageRequest.of(page, size,
                Sort.by("productId").descending()));
    }

    /*상품 삭제
    영속성 전이: CASCADE 덕분에 Product를 삭제할 때 연관 관계 매핑된 Review와 FavoriteProduct도 함께 삭제될걸로 예상하는데 맞을까요? */
    public void delete(long productId) {
        Product find = findVerifiedProduct(productId); // 전달받은 productId와 일치하는 상품 가져오기

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

    /*찜 가져오기*/



    //상품 검색
    @Transactional
    public Page<Product> search(Map<String, String> params, Pageable pageable) {
        return productRepository.findProductsByProductNameContaining(params.get("key"), pageable);
    }//

}
