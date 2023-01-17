package com.lifo.CVSreview.favorite.mapper;

import com.lifo.CVSreview.favorite.dto.FavoriteResponseDto;
import com.lifo.CVSreview.favorite.entity.Favorite;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface FavoriteMapper {
    List<FavoriteResponseDto> favoritesToFavoriteResponseDtos(List<Favorite> favorites);
}
