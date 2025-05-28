package com.iba.cahierdetexte.service;

import com.iba.cahierdetexte.model.Notification;

import java.util.List;

public interface NotificationService {
    Notification send(Notification notification);
    List<Notification> getAll();
    void delete(Long id);
}
