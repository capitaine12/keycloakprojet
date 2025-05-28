package com.iba.cahierdetexte.service.impl;

import com.iba.cahierdetexte.model.Classe;
import com.iba.cahierdetexte.repository.ClasseRepository;
import com.iba.cahierdetexte.service.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseServiceImpl implements ClasseService {

    @Autowired
    private ClasseRepository classeRepository;

    public List<Classe> getAll() {
        return classeRepository.findAll();
    }

    public Classe getById(Long id) {
        return classeRepository.findById(id).orElse(null);
    }

    public Classe create(Classe classe) {
        return classeRepository.save(classe);
    }

    public Classe update(Long id, Classe classe) {
        classe.setId(id);
        return classeRepository.save(classe);
    }

    public void delete(Long id) {
        classeRepository.deleteById(id);
    }

    @Override
    public Classe createClasse(Classe classe) {
        
        throw new UnsupportedOperationException("Unimplemented method 'createClasse'");
    }

    @Override
    public Classe getClasseById(Long id) {
        
        throw new UnsupportedOperationException("Unimplemented method 'getClasseById'");
    }

    @Override
    public List<Classe> getAllClasses() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getAllClasses'");
    }

    @Override
    public Classe updateClasse(Long id, Classe classe) {
        
        throw new UnsupportedOperationException("Unimplemented method 'updateClasse'");
    }

    @Override
    public void deleteClasse(Long id) {
        
        throw new UnsupportedOperationException("Unimplemented method 'deleteClasse'");
    }
}
