package com.iba.cahierdetexte.controller;

import com.iba.cahierdetexte.service.EmploiDuTemps;
import com.iba.cahierdetexte.service.EmploiDuTempsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/emplois")
@CrossOrigin(origins = "*")
public class EmploiDuTempsController {

    @Autowired
    private EmploiDuTempsService emploiService;

    @PostMapping
    public EmploiDuTemps createEmploi(@RequestBody EmploiDuTemps emploi) {
        return emploiService.saveEmploi(emploi);
    }

    @GetMapping
    public List<EmploiDuTemps> getAllEmplois() {
        return emploiService.getAllEmplois();
    }

    @GetMapping("/{id}")
    public EmploiDuTemps getEmploiById(@PathVariable Long id) {
        return emploiService.getById(id);
    }

    @PutMapping("/{id}")
    public EmploiDuTemps updateEmploi(@PathVariable Long id, @RequestBody EmploiDuTemps emploi) {
        return emploiService.update(id, emploi);
    }

    @DeleteMapping("/{id}")
    public void deleteEmploi(@PathVariable Long id) {
        emploiService.delete(id);
    }
}
