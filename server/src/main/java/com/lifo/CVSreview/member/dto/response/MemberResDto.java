package com.lifo.CVSreview.member.dto.response;

import com.lifo.CVSreview.review.dto.ReviewResponseDto;
import com.lifo.CVSreview.review.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    private Integer role;
    private Long image_name;
    private Long image_path;
    private LocalDateTime member_created_at;
    private List<ReviewResponseDto> reviews;
//    private List<ZzimResponseDto> Zzims;
    public void setReviews(List<ReviewResponseDto> reviews){
        this.reviews = reviews;
    }
}

