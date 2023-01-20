package com.lifo.CVSreview.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberPostReqDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{8,20}$"
            , message = "8자 이상, 영문, 숫자, 특수문자가 포함되어야 합니다.")
    private String password;

    @NotBlank
    private String nickname;

    private String image_name;

    private String image_path;
}
