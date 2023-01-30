package com.lifo.CVSreview.member.dto.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberPatchReqDto {
    @Positive
    @ApiModelProperty(value = "유저번호", dataType = "Long", required = true)
    private Long memberId;
    @ApiModelProperty(value = "비밀번호")
    private String password;
    @ApiModelProperty(value = "닉네임")
    private String nickname;

    private String image_name;

    private String image_path;
}
