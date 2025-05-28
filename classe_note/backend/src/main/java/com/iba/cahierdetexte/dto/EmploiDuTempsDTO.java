package com.iba.cahierdetexte.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EmploiDuTempsDTO {
    private Long id;
    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;
    private String salle;
    private Long matiereId;
    private Long classeId;
}
