package com.iba.cahierdetexte.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double valeur;

    @ManyToOne
    @JoinColumn(name = "devoir_id")
    private Devoir devoir;

    @ManyToOne
    @JoinColumn(name = "eleve_id")
    private User eleve; // L'élève ayant reçu la note
}
