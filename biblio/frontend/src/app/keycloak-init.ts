// src/app/keycloak-init.ts
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080', // Adresse de Keycloak
        realm: 'saturne',             // Nom de ton realm
        clientId: 'angular-frontend', // Nom du client dans Keycloak
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      }
    });
}
