package com.iba.cahierdetexte.service.impl;

import com.iba.cahierdetexte.model.Notification;
import com.iba.cahierdetexte.repository.NotificationRepository;
import com.iba.cahierdetexte.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository repository;

    @Override
    public Notification send(Notification notification) {
        notification.setDateEnvoi(java.time.LocalDateTime.now());
        return repository.save(notification);
    }

    @Override
    public List<Notification> getAll() {
        return repository.findAll();
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
