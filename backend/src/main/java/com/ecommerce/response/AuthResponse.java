package com.ecommerce.response;

import com.ecommerce.model.User;

public class AuthResponse {
    private String jwt;
    private String message;
    private User user;

    public AuthResponse(String jwt, String message, User user){
        this.jwt = jwt;
        this.message = message;
        this.user = user;
    }

    public String getJwt() {
        return jwt;
    }

    public String getMessage() {
        return message;
    }

    public User getUser(){
        return user;
    }
}
