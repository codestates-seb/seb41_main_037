package com.lifo.CVSreview.product.mapper;

import com.lifo.CVSreview.product.dto.ProductDto;
import com.lifo.CVSreview.product.dto.ProductFormDto;
import com.lifo.CVSreview.product.entity.Product;
import org.mapstruct.Mapper;

import java.util.List;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product postToEntity(ProductFormDto post);

    Product patchToEntity(ProductFormDto patch);

    Product postToEntity(ProductDto.Post post);

    Product patchToEntity(ProductDto.Patch patch);

    ProductDto.Response entityToResponse(Product product);

    List<ProductDto.Response> entitysToResponses(List<Product> products);

}
