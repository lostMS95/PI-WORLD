package com.blockchain.backend.controller;

import com.blockchain.backend.entity.User;
import com.blockchain.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // localhost:3000 허용
public class AuthController {

    @Autowired
    private AuthService authService;

    // 회원가입 API
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            authService.registerUser(user);
            return ResponseEntity.ok("회원가입 성공");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("회원가입 실패: " + e.getMessage());
        }
    }

    // 로그인 API (간단한 예시)
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            boolean isAuthenticated = authService.authenticateUser(user);
            if (isAuthenticated) {
                return ResponseEntity.ok("로그인 성공");
            } else {
                return ResponseEntity.status(400).body("로그인 실패: 잘못된 사용자명 또는 비밀번호");
            }
        } catch (Exception e) {
            return ResponseEntity.status(400).body("로그인 실패: " + e.getMessage());
        }
    }
}
