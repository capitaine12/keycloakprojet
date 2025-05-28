package com.iba.cahierdetexte.model;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Devoir {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    private String description;

    private LocalDate dateLimite;

    @ManyToOne
    @JoinColumn(name = "matiere_id")
    private Matiere matiere;

    @ManyToOne
    @JoinColumn(name = "classe_id")
    private Classe classe;

    @ManyToOne
    @JoinColumn(name = "enseignant_id")
    private User enseignant; // L'enseignant ayant donné le devoir

    public void setUser(User user) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setUser'");
    }

    public Object getDateEcheance() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getDateEcheance'");
    }

    public void setDateEcheance(Object dateEcheance) {
        
        throw new UnsupportedOperationException("Unimplemented method 'setDateEcheance'");
    }
}
