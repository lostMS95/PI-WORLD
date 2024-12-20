package com.blockchain.backend.repository;

import com.blockchain.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // username을 이용한 유저 찾기 (로그인용)
    User findByUsername(String username);

    // phoneNumber로 유저 찾기 (회원가입시 유효성 검사 등)
    User findByPhoneNumber(String phoneNumber);
}
