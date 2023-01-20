package com.lifo.CVSreview.member.dto.response;

import com.lifo.CVSreview.favorite.dto.FavoriteResponseDto;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberMyPageDto {
    private Long memberId;
    private String nickname;
    private Integer role;
    private String image_name;
    private String image_path;
    private List<ReviewResponseDto> reviews;
    private List<FavoriteResponseDto> favorites;

    public void setReviews(List<ReviewResponseDto> reviews){
        this.reviews = reviews;
    }


}
