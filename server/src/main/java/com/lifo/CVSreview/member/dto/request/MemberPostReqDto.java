package com.lifo.CVSreview.member.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberPostReqDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String nickname;

    private String description;

    private Long image_name;

    private Long image_path;

    @Min(1)
    @Max(2)
    private Integer role;

}
