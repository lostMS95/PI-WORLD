package com.blockchain.backend.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignupRequest {
    @NotBlank(message = "아이디는 필수 입력값입니다")
    private String username;

    @NotBlank(message = "이메일은 필수 입력값입니다")
    @Email(message = "이메일 형식이 올바르지 않습니다")
    private String email;

    @NotBlank(message = "전화번호는 필수 입력값입니다")
    private String phoneNumber;

    @NotBlank(message = "비밀번호는 필수 입력값입니다")
    @Size(min = 6, message = "비밀번호는 6자 이상이어야 합니다")
    private String password;
}