package com.iba.cahierdetexte.service;

import com.iba.cahierdetexte.model.Evenement;

import java.util.List;

public interface EvenementService {
    Evenement saveEvenement(Evenement evenement);
    Evenement getEvenementById(Long id);
    List<Evenement> getAllEvenements();
    Evenement updateEvenement(Long id, Evenement evenement);
    void deleteEvenement(Long id);
}
