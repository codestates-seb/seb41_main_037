package com.lifo.CVSreview.product.controller;

import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.mapper.ProductMapper;
import com.lifo.CVSreview.product.service.ProductService;
import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/products")
@Validated
public class ProductController {
    private final ProductService productService;
    private final ProductMapper mapper;

    @PostMapping
    public ResponseEntity post(@Valid @RequestBody ProductDto.Post post) {
        Product product = productService.create(mapper.postToEntity(post));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.entityToResponse(product)), HttpStatus.CREATED);
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity patch(@PathVariable("product-id") @Positive long productId,
                                @Valid @RequestBody ProductDto.Patch patch) {
        patch.setProductId(productId);

        Product update = productService.updateProduct(mapper.patchToEntity(patch));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.entityToResponse(update)), HttpStatus.OK);
    }

    @GetMapping("/{product-id}")
    public ResponseEntity get(@PathVariable("product-id") @Positive long productId) {
        Product product = productService.find(productId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.entityToResponse(product)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity gets(@Positive @RequestParam(defaultValue = "1") int page,
                               @Positive @RequestParam(defaultValue = "10") int size) {
        Page<Product> pageProduct = productService.findAll(page-1, size);
        List<Product> products = pageProduct.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.entitysToResponses(products), pageProduct), HttpStatus.OK);
    }

    @DeleteMapping("/{product-id}")
    public ResponseEntity delete(@PathVariable("product-id") @Positive long productId) {
        productService.delete(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
