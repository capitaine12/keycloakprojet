package com.iba.cahierdetexte.service;

import java.util.List;

public interface EmploiDuTempsService {
    EmploiDuTemps create(EmploiDuTemps edt);
    EmploiDuTemps getById(Long id);
    List<EmploiDuTemps> getAll();
    EmploiDuTemps update(Long id, EmploiDuTemps edt);
    void delete(Long id);
    EmploiDuTemps saveEmploi(EmploiDuTemps emploi);
    List<EmploiDuTemps> getAllEmplois();
}
