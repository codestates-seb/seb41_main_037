package com.lifo.CVSreview.member.dto.response;

import com.lifo.CVSreview.favorite.dto.FavoriteResponseDto;
import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberMyPageDto {
    @ApiModelProperty(value = "유저번호", dataType = "Long", required = true)
    private Long memberId;
    @ApiModelProperty(value = "닉네임")
    private String nickname;
    @ApiModelProperty(value = "비밀번호")
    private String email;
    @ApiModelProperty(value = "권한")
    private List<String> roles;
    private String image_name;
    private String image_path;
    private List<ReviewResponseDto> reviews;
    private List<FavoriteResponseDto> favorites;

    public void setReviews(List<ReviewResponseDto> reviews){
        this.reviews = reviews;
    }


}
