package com.iba.cahierdetexte.service;

import com.iba.cahierdetexte.model.Classe;
import java.util.List;

public interface ClasseService {
    Classe createClasse(Classe classe);
    Classe getClasseById(Long id);
    List<Classe> getAllClasses();
    Classe updateClasse(Long id, Classe classe);
    void deleteClasse(Long id);
}
