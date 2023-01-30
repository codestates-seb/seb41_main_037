package com.lifo.CVSreview.admin.contoller;

import com.lifo.CVSreview.member.Entity.Member;
import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.entity.Product;
import com.lifo.CVSreview.product.mapper.ProductMapper;
import com.lifo.CVSreview.product.service.ProductService;
import com.lifo.CVSreview.response.SingleResponseDto;
import com.lifo.CVSreview.review.mapper.ReviewMapper;
import com.lifo.CVSreview.review.service.ReviewService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AdminController {
    private final ReviewService reviewService;

    private final ProductService productService;
    private final ProductMapper mapper;

    @DeleteMapping("/reviews/{review-id}")
    @ApiOperation(value="관리자가 리뷰 삭제", notes="관리자가 직접 회원이 작성한 리뷰를 삭제하는 api입니다.")
    public ResponseEntity deleteReview(@PathVariable("review-id") int reviewId) {
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

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

    @DeleteMapping("/{product-id}")
    public ResponseEntity delete(@PathVariable("product-id") @Positive long productId) {
        productService.delete(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}