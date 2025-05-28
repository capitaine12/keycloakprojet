package com.iba.cahierdetexte.controller;

import com.iba.cahierdetexte.model.Evenement;
import com.iba.cahierdetexte.service.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evenements")
@CrossOrigin(origins = "*") // À ajuster pour ton domaine frontend
public class EvenementController {

    @Autowired
    private EvenementService evenementService;

    @PostMapping
    public Evenement createEvenement(@RequestBody Evenement evenement) {
        return evenementService.saveEvenement(evenement);
    }

    @GetMapping("/{id}")
    public Evenement getEvenement(@PathVariable Long id) {
        return evenementService.getEvenementById(id);
    }

    @GetMapping
    public List<Evenement> getAllEvenements() {
        return evenementService.getAllEvenements();
    }

    @PutMapping("/{id}")
    public Evenement updateEvenement(@PathVariable Long id, @RequestBody Evenement evenement) {
        return evenementService.updateEvenement(id, evenement);
    }

    @DeleteMapping("/{id}")
    public void deleteEvenement(@PathVariable Long id) {
        evenementService.deleteEvenement(id);
    }
}
