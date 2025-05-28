package com.iba.cahierdetexte.service;

import com.iba.cahierdetexte.payload.LoginRequest;
import com.iba.cahierdetexte.payload.RegisterRequest;
import com.iba.cahierdetexte.payload.JwtResponse;

public interface AuthService {
    JwtResponse login(LoginRequest loginRequest);
    JwtResponse register(RegisterRequest registerRequest);
}