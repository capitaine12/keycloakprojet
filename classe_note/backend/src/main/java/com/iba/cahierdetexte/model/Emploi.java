package com.iba.cahierdetexte.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.DayOfWeek;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Emploi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private DayOfWeek jour;

    private LocalTime heureDebut;

    private LocalTime heureFin;

    @ManyToOne
    private Matiere matiere;

    @ManyToOne
    private Classe classe;
}
