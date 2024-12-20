package com.blockchain.backend.entity;

import lombok.Data;

@Data
public class User {
    private String username;
    private String email;
    private String password;
}