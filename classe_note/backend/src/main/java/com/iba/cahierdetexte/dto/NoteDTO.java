package com.iba.cahierdetexte.dto;

import lombok.Data;

@Data
public class NoteDTO {
    private Long id;
    private Double valeur;
    private Long devoirId;
    private Long utilisateurId;
}
