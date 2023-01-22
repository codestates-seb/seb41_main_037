package com.lifo.CVSreview.favorite.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteResponseDto {
    private long favoriteId;
    private String createdAt;
    private long memberId;
    private long productId;
    private String ProductName;
    private String imgName;
    private String imgUrl;
    private int price;
}
