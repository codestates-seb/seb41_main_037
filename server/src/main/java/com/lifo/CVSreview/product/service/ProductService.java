package com.lifo.CVSreview.product.service;

import com.lifo.CVSreview.exception.BusinessLogicException;
import com.lifo.CVSreview.exception.ExceptionCode;
import com.lifo.CVSreview.product.dto.ProductFormDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.repository.ProductImgRepository;
import com.lifo.CVSreview.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductImgService productImgService;
    private final ProductImgRepository productImgRepository;

    public Long saveProduct(ProductFormDto productFormDto, List<MultipartFile> productImgFileList) throws Exception {

        // 상품 등록
        Product product = productFormDto.createProduct();//1    상품 등록 폼으로부터 입력 받은 데이터를 이용하여 product 객체를 생성
        productRepository.save(product);//2 상품데이터를 저장한다.

        return product.getProductId();
    }

    public Long updateProduct(ProductFormDto productFormDto, List<MultipartFile> productImgFileList) throws Exception {

        // 상품 수정
        Product product = productRepository.findById(productFormDto.getId())    // 상품 등록 화면으로부터 전달받은 상품 아이디를 이용하여 상품 엔티티를 조회
                .orElseThrow(EntityNotFoundException::new);
        product.updateProduct(productFormDto);  //상품 등록 화면으로부터 전달 받은 productFormDto를 통해 상품 엔티티를 업데이트

        List<Long> productImgIds = productFormDto.getProductIds();  //  상품 이미지 아이디 리스트를 조회

        //이미지 등록
        for (int i = 0; i < productImgFileList.size(); i++) {
            productImgService.updateProductImg(productImgIds.get(i),
                    productImgFileList.get(i)); //  상품 이미지를 업데이트하기 위해서 updateProductImg() 메소드에 상품 이미지 아이디와 상품 이미지 파일 정보를 파라미터로 전달
        }
        return product.getProductId();
    }


    public Product find(long productId) {
        return findVerifiedProduct(productId);
    }

    public Page<Product> findProducts(int page, int size) {
        return productRepository.findAll(PageRequest.of(page, size,
                Sort.by("productId").descending()));
    }

    public void delete(long productId) {
        Product findProduct = findVerifiedProduct(productId);

        productRepository.delete(findProduct);
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