package com.blockchain.backend.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "아이디는 필수 입력값입니다")
    private String username;

    @NotBlank(message = "비밀번호는 필수 입력값입니다")
    @Size(min = 6, message = "비밀번호는 6자 이상이어야 합니다")
    private String password;
}
