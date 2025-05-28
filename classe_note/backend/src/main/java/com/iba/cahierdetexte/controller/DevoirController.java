package com.iba.cahierdetexte.controller;

import com.iba.cahierdetexte.model.Devoir;
import com.iba.cahierdetexte.service.DevoirService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/devoirs")
@CrossOrigin(origins = "*")
public class DevoirController {

    @Autowired
    private DevoirService devoirService;

    @PostMapping
    public Devoir createDevoir(@RequestBody Devoir devoir) {
        return devoirService.saveDevoir(devoir);
    }

    @GetMapping
    public List<Devoir> getAllDevoirs() {
        return devoirService.getAllDevoirs();
    }

    @GetMapping("/{id}")
    public Devoir getDevoirById(@PathVariable Long id) {
        return devoirService.getDevoirById(id);
    }

    @PutMapping("/{id}")
    public Devoir updateDevoir(@PathVariable Long id, @RequestBody Devoir devoir) {
        return devoirService.updateDevoir(id, devoir);
    }

    @DeleteMapping("/{id}")
    public void deleteDevoir(@PathVariable Long id) {
        devoirService.deleteDevoir(id);
    }
}
