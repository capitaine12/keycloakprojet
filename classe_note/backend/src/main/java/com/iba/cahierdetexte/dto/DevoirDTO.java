package com.iba.cahierdetexte.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DevoirDTO {
    private Long id;
    private String titre;
    private String description;
    private LocalDate dateRemise;
    private Long matiereId;
    private Long classeId;
}
