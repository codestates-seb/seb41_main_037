package com.lifo.CVSreview.product.controller;

import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.mapper.ProductMapper;
import com.lifo.CVSreview.product.repository.ProductRepository;
import com.lifo.CVSreview.product.service.ProductService;
import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.response.SingleResponseDto;
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


    @GetMapping("/{product-id}")
    public ResponseEntity get(@PathVariable("product-id") @Positive long productId) {
        Product product = productService.find(productId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.entityToResponse(product)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity gets(@Positive @RequestParam(defaultValue = "1") int page,
                               @Positive @RequestParam(defaultValue = "10") int size) {
        Page<Product> pageProduct = productService.findAll(page - 1, size);
        List<Product> products = pageProduct.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.entitysToResponses(products), pageProduct), HttpStatus.OK);
    }

    /*search*/
    @GetMapping("/search")
   public ResponseEntity productSearch(
            Product.ProductCategory category,
            @RequestParam Map<String, String> params,
            @PageableDefault(page = 0, size = 8, direction = Sort.Direction.DESC)
           Pageable pageable) {
        Page<Product> search = productService.search(params, pageable);
        return new ResponseEntity<>(new MultiResponseDto(search.getContent(),search), HttpStatus.OK);
    }
}





