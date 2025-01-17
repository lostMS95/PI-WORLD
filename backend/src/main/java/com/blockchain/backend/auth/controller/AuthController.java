package com.blockchain.backend.auth.controller;

import com.blockchain.backend.auth.dto.JwtResponse;
import com.blockchain.backend.auth.dto.LoginRequest;
import com.blockchain.backend.auth.dto.MessageResponse;
import com.blockchain.backend.auth.dto.SignupRequest;
import com.blockchain.backend.auth.service.AuthService;

import com.blockchain.backend.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest signupRequest) {
        try {
            userService.signup(signupRequest);
            return ResponseEntity.ok(new MessageResponse("회원가입이 완료되었습니다"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(new MessageResponse("회원가입 처리 중 오류가 발생했습니다"));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
