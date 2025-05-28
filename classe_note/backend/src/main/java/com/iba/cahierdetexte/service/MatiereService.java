package com.iba.cahierdetexte.service;

import java.util.List;

import com.iba.cahierdetexte.model.Matiere;

public interface MatiereService {
    MatiereDto createMatiere(MatiereDto matiereDto);
    MatiereDto getMatiereById(Long id);
    List<MatiereDto> getAllMatieres();
    MatiereDto updateMatiere(Long id, Matiere matiere);
    void deleteMatiere(Long id);
}