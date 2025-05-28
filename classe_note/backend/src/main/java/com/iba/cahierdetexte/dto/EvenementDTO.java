package com.iba.cahierdetexte.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EvenementDTO {
    private Long id;
    private String titre;
    private String description;
    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;
    private Long classeId;
}
