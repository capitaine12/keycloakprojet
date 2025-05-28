package com.iba.cahierdetexte.repository;

import com.iba.cahierdetexte.model.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvenementRepository extends JpaRepository<Evenement, Long> {
    List<Evenement> findByClasseId(Long classeId);
}
