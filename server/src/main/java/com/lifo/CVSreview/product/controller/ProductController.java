package com.lifo.CVSreview.product.controller;

import com.lifo.CVSreview.product.dto.ProductFormDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.mapper.ProductMapper;
import com.lifo.CVSreview.product.service.ProductService;
import com.lifo.CVSreview.response.MultiResponseDto;
import com.lifo.CVSreview.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/products")
@Validated
@RequiredArgsConstructor    //이 어노테이션은 초기화 되지않은 final 필드나, @NonNull 이 붙은 필드에 대해 생성자를 생성해 줍니다.
// 주로 의존성 주입(Dependency Injection) 편의성을 위해서 사용되곤 합니다.

public class ProductController {
    private final ProductService productService;
    private final ProductMapper mapper;

    @PostMapping(value = "/admin/product/new")
    public String productNew(@Valid ProductFormDto productFormDto, BindingResult bindingResult, Model model, @RequestParam("productImgFile") List<MultipartFile> productImgFileList) {

        if(bindingResult.hasErrors()){  // 상품 등록 시 필수 값이 없다면 다시 상품 등록 페이지로 전환한다.
            return "product/productForm";
        }
        try {
            productService.saveProduct(productFormDto, productImgFileList); // 상품 저장 로직을 호출한다.매개 변수로 상품 정보와 상품 이미지 정보를 담고 있는 productImgFileList를 넘겨준다.
        } catch (Exception e) {
            model.addAttribute("errorMessage", "상품 등록 중 에러가 발생하였습니다.");
            return "product/productForm";
        }
        return "redirect:/";    // 상품이 정상적으로 등록 되었다면 메인 페이지로 이동한다.
    }


    @GetMapping("/{product-id}")
    public ResponseEntity get(@PathVariable("product-id") @Positive long productId) {
        Product response = productService.find(productId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.entityToResponse(response)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity gets(@Positive @RequestParam(defaultValue = "1") int page,
                               @Positive @RequestParam(defaultValue = "10") int size) {
        Page<Product> pageProduct = productService.findProducts(page-1, size);
       List<Product> products = pageProduct.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.entitysToResponses(products), pageProduct), HttpStatus.OK);
    }

    @DeleteMapping("/{product-id}")
    public ResponseEntity deleteProduct(
            @PathVariable("product-id") @Positive long productId) {
        System.out.println("# delete product");
        productService.delete(productId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

