package com.iba.cahierdetexte.service;

import com.iba.cahierdetexte.model.Classe;
import com.iba.cahierdetexte.model.Devoir;
import com.iba.cahierdetexte.model.Matiere;
import com.iba.cahierdetexte.model.User;
import com.iba.cahierdetexte.repository.ClasseRepository;
import com.iba.cahierdetexte.repository.DevoirRepository;
import com.iba.cahierdetexte.repository.MatiereRepository;
import com.iba.cahierdetexte.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DevoirService {

    @Autowired
    private DevoirRepository devoirRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClasseRepository classeRepository;

    @Autowired
    private MatiereRepository matiereRepository;

    public List<Devoir> getAllDevoirs() {
        return devoirRepository.findAll();
    }

    public Devoir getDevoirById(Long id) {
        return devoirRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Devoir non trouvé"));
    }

    public Devoir createDevoir(Devoir devoir, Long userId, Long classeId, Long matiereId) {
        Optional<User> userOpt = userRepository.findById(userId);
        Optional<Classe> classeOpt = classeRepository.findById(classeId);
        Optional<Matiere> matiereOpt = matiereRepository.findById(matiereId);

        if (userOpt.isPresent() && classeOpt.isPresent() && matiereOpt.isPresent()) {
            devoir.setUser(userOpt.get());
            devoir.setClasse(classeOpt.get());
            devoir.setMatiere(matiereOpt.get());
            return devoirRepository.save(devoir);
        } else {
            throw new RuntimeException("Utilisateur, Classe ou Matière non trouvé");
        }
    }

    public Devoir updateDevoir(Long id, Devoir updatedDevoir) {
        return devoirRepository.findById(id).map(devoir -> {
            devoir.setTitre(updatedDevoir.getTitre());
            devoir.setDescription(updatedDevoir.getDescription());
            devoir.setDateEcheance(updatedDevoir.getDateEcheance());
            return devoirRepository.save(devoir);
        }).orElseThrow(() -> new RuntimeException("Devoir non trouvé"));
    }

    public void deleteDevoir(Long id) {
        devoirRepository.deleteById(id);
    }

    public List<Devoir> getDevoirsByUserId(Long userId) {
        return devoirRepository.findByUserId(userId);
    }

    public List<Devoir> getDevoirsByClasseId(Long classeId) {
        return devoirRepository.findByClasseId(classeId);
    }

	public Devoir saveDevoir(Devoir devoir) {
		
		throw new UnsupportedOperationException("Unimplemented method 'saveDevoir'");
	}
}