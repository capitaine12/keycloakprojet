package com.iba.cahierdetexte.service.impl;

import com.iba.cahierdetexte.dto.LoginRequest;
import com.iba.cahierdetexte.dto.RegisterRequest;
import com.iba.cahierdetexte.dto.JwtResponse;
import com.iba.cahierdetexte.model.Role;
import com.iba.cahierdetexte.model.Utilisateur;
import com.iba.cahierdetexte.repository.UtilisateurRepository;
import com.iba.cahierdetexte.security.JwtUtil;
import com.iba.cahierdetexte.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    public JwtResponse login(LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String token = jwtUtil.generateToken(userDetails.getUsername());

        return new JwtResponse(token);
    }

    public JwtResponse register(RegisterRequest request) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setEmail(request.getEmail());
        utilisateur.setPassword(passwordEncoder.encode(request.getPassword()));
        
        java.util.Set<Role> roles = new java.util.HashSet<>();
        roles.add(Role.valueOf(request.getRole()));
        utilisateur.setRoles(roles);

        utilisateurRepository.save(utilisateur);

        String token = jwtUtil.generateToken(utilisateur);
        return new JwtResponse(token);
    }

    @Override
    public com.iba.cahierdetexte.payload.JwtResponse login(com.iba.cahierdetexte.payload.LoginRequest loginRequest) {
        
        throw new UnsupportedOperationException("Unimplemented method 'login'");
    }

    @Override
    public com.iba.cahierdetexte.payload.JwtResponse register(
            com.iba.cahierdetexte.payload.RegisterRequest registerRequest) {
        
        throw new UnsupportedOperationException("Unimplemented method 'register'");
    }
}