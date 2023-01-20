package com.lifo.CVSreview.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberPatchReqDto {
    @Positive
    private Long memberId;

    private String password;

    private String nickname;

    private String image_name;

    private String image_path;
}
