package com.iba.cahierdetexte.service.impl;

import com.iba.cahierdetexte.model.Evenement;
import com.iba.cahierdetexte.repository.EvenementRepository;
import com.iba.cahierdetexte.service.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvenementServiceImpl implements EvenementService {

    @Autowired
    private EvenementRepository evenementRepository;

    @Override
    public Evenement saveEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    @Override
    public Evenement getEvenementById(Long id) {
        return evenementRepository.findById(id).orElse(null);
    }

    @Override
    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    @Override
    public Evenement updateEvenement(Long id, Evenement evenement) {
        Evenement existing = getEvenementById(id);
        if (existing != null) {
            existing.setTitre(evenement.getTitre());
            existing.setDescription(evenement.getDescription());
            existing.setDateDebut(evenement.getDateDebut());
            existing.setDateFin(evenement.getDateFin());
            existing.setClasse(evenement.getClasse());
            existing.setTitre(evenement.getTitre());
            existing.setEnseignant(evenement.getEnseignant());
            return evenementRepository.save(existing);
        }
        return null;
    }

    @Override
    public void deleteEvenement(Long id) {
        evenementRepository.deleteById(id);
    }
}
