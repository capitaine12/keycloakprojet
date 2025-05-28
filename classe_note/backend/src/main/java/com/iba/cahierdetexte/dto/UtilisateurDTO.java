package com.iba.cahierdetexte.dto;

import lombok.Data;

@Data
public class UtilisateurDTO {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String motDePasse; // Optionnel si tu veux le cacher
    private String role;
}
