package com.lifo.CVSreview.auth.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class LoginDto {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
