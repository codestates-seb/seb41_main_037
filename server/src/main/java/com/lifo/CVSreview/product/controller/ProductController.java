package com.lifo.CVSreview.product.controller;

import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.mapper.ProductMapper;
import com.lifo.CVSreview.product.repository.ProductRepository;
import com.lifo.CVSreview.product.service.ProductService;
import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.response.SingleResponseDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;


import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@Validated
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ProductMapper mapper;

    @ApiOperation(value = "한 개의 상품 정보 조회", notes = "ProductId를 이용하여 상품 정보를 조회합니다.")
    @GetMapping("/{product-id}")
    public ResponseEntity get(@PathVariable("product-id") @Positive long productId) {

        Product product = productService.find(productId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.entityToResponse(product)), HttpStatus.OK);
    }

    @ApiOperation(value = "상품 목록 조회", notes = "전체 상품 목록을 조회합니다.")
    @GetMapping
    public ResponseEntity gets(
            @PageableDefault(page = 0, size = 8, sort = "productId", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        Page<Product> pageProduct = productService.findAll(pageable);
        List<Product> products = pageProduct.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.entitysToResponses(products), pageProduct), HttpStatus.OK);
    }


    /*search*/

    @GetMapping("/search")
    public ResponseEntity productSearch(
            @RequestParam Map<String, String> params,
            @PageableDefault(page = 0, size = 8, sort = "productId", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        Page<Product> search = productService.search(params, pageable);
        List<ProductDto.Response> list = mapper.entitysToResponses(search.getContent());
        return new ResponseEntity<>(new MultiResponseDto(list, search), HttpStatus.OK);
    }

}





