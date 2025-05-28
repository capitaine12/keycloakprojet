package com.iba.cahierdetexte.controller;

import com.iba.cahierdetexte.model.Matiere;
import com.iba.cahierdetexte.service.MatiereDto;
import com.iba.cahierdetexte.service.MatiereService;
// Removed unused import of MatiereDTO
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matieres")
@CrossOrigin(origins = "*")
public class MatiereController {

    @Autowired
    private MatiereService matiereService;
    @PostMapping
    public MatiereDto createMatiere(@RequestBody com.iba.cahierdetexte.service.MatiereDto matiereDto) {
        return matiereService.createMatiere(matiereDto);
    }

    @GetMapping
    public List<com.iba.cahierdetexte.service.MatiereDto> getAllMatieres() {
        return matiereService.getAllMatieres();
    }

    @GetMapping("/{id}")
    public com.iba.cahierdetexte.service.MatiereDto getMatiereById(@PathVariable Long id) {
        return matiereService.getMatiereById(id);
    }

    @PutMapping("/{id}")
    public com.iba.cahierdetexte.service.MatiereDto updateMatiere(@PathVariable Long id, @RequestBody Matiere matiere) {
        return matiereService.updateMatiere(id, matiere);
    }

    @DeleteMapping("/{id}")
    public void deleteMatiere(@PathVariable Long id) {
        matiereService.deleteMatiere(id);
    }
}
