/* import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak
      .init({
        config: {
          url: 'http://localhost:8080',
          realm: 'saturne',
          clientId: 'cosmos-x-docs'
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
        },
        bearerExcludedUrls: ['/assets']
      })
      .then(() => {
        console.log('Keycloak initialisé avec succès');
      })
      .catch((error) => {
        console.error(' Erreur d\'initialisation Keycloak', error);
      });
}
 */

import { KeycloakService } from 'keycloak-angular';
import { ReplaySubject } from 'rxjs';

const keycloakReady$ = new ReplaySubject<boolean>(1);

export function initializeKeycloak(keycloakService: KeycloakService): () => void {
  keycloakService.init({
    config: {
      url: 'http://localhost:8080',
      realm: 'saturne',
      clientId: 'cosmos-x-docs',
    },
    initOptions: {
      onLoad: 'login-required',
      responseMode: 'query',
      checkLoginIframe: false,
    },
  }).then(() => {
    keycloakReady$.next(true);
    keycloakReady$.complete();
  }).catch(() => {
    keycloakReady$.error('Keycloak failed');
  });

  return () => {};
}
