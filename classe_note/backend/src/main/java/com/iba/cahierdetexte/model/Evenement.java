package com.iba.cahierdetexte.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Evenement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String description;

    private LocalDateTime dateDebut;

    private LocalDateTime dateFin;

    @ManyToOne
    private Classe classe;

    public Object getEnseignant() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getEnseignant'");
    }

    public void setEnseignant(Object enseignant) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setEnseignant'");
    }
}
