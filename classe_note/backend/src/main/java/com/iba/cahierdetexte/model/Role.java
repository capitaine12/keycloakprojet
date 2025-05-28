package com.iba.cahierdetexte.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String nom;

    public static Role valueOf(String role) {
        
        throw new UnsupportedOperationException("Unimplemented method 'valueOf'");
    }
}
