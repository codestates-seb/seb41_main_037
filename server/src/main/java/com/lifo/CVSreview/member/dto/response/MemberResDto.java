package com.lifo.CVSreview.member.dto.response;

import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberResDto {
    private Long memberId;
    private String email;
    private String nickname;
    private String password;
    private String image_name;
    private String image_path;
    private LocalDateTime member_created_at;
    private List<ReviewResponseDto> reviews;
    public void setReviews(List<ReviewResponseDto> reviews){
        this.reviews = reviews;
    }
}

