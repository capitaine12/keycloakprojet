package com.iba.cahierdetexte.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class NotificationDTO {
    private Long id;
    private String message;
    private LocalDateTime date;
    private Long utilisateurId;
}
