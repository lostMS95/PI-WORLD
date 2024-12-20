package com.blockchain.backend.service;

import com.blockchain.backend.entity.User;
import com.blockchain.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // 회원가입 처리
    public void registerUser(User user) throws Exception {
        // 전화번호 중복 확인
        if (userRepository.findByPhoneNumber(user.getPhoneNumber()) != null) {
            throw new Exception("전화번호가 이미 존재합니다.");
        }

        // 사용자명 중복 확인
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new Exception("사용자명이 이미 존재합니다.");
        }

        // 비밀번호 암호화
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // 사용자 저장
        userRepository.save(user);
    }

    // 로그인 인증 처리
    public boolean authenticateUser(User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            return true;
        }
        return false;
    }
}
