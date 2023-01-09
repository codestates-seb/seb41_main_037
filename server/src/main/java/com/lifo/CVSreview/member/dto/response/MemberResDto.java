package com.lifo.CVSreview.member.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

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
}
