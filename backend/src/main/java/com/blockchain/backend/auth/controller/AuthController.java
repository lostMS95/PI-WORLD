package com.blockchain.backend.auth.controller;

import com.blockchain.backend.auth.dto.JwtResponse;
import com.blockchain.backend.auth.dto.LoginRequest;
import com.blockchain.backend.auth.dto.MessageResponse;
import com.blockchain.backend.auth.dto.SignupRequest;
import com.blockchain.backend.auth.service.AuthService;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    //@Autowired
    //private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest signupRequest) {
        try {
            //userService.signup(signupRequest);
            return ResponseEntity.ok(new MessageResponse("회원가입 성공"));
        } catch (Exception e) {
            return ResponseEntity.status(400).body("회원가입 실패: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
