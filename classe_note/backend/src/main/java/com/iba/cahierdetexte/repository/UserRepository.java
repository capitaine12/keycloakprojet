package com.iba.cahierdetexte.repository;

import com.iba.cahierdetexte.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    List<User> findByRole(String role); // Exemple : "ADMIN", "ENSEIGNANT", "RESPONSABLE"

}