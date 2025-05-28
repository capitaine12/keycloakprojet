package com.iba.cahierdetexte.repository;

import com.iba.cahierdetexte.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByClasseId(Long classeId);
}
