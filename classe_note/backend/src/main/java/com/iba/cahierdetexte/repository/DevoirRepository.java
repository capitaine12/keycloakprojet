package com.iba.cahierdetexte.repository;

import com.iba.cahierdetexte.model.Devoir;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DevoirRepository extends JpaRepository<Devoir, Long> {
    List<Devoir> findByClasseId(Long classeId);

    List<Devoir> findByUserId(Long userId);
}
