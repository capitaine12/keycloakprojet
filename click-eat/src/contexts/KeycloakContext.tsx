import React, { createContext, useContext, useEffect, useState } from 'react';
import Keycloak, { KeycloakInstance, KeycloakProfile } from 'keycloak-js';

type KeycloakContextType = {
  keycloak: KeycloakInstance | null;
  initialized: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userProfile: KeycloakProfile | null;
};

const KeycloakContext = createContext<KeycloakContextType>({
  keycloak: null,
  initialized: false,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  userProfile: null,
});

export const useKeycloak = () => useContext(KeycloakContext);

export const KeycloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [keycloak, setKeycloak] = useState<KeycloakInstance | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [userProfile, setUserProfile] = useState<KeycloakProfile | null>(null);

  useEffect(() => {
    const initKeycloak = async () => {
      const keycloakInstance = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'saturne',
        clientId: 'click-eat', // client public avec PKCE activé dans Keycloak
      });

      try {
        const authenticated = await keycloakInstance.init({
          onLoad: 'check-sso', // ou 'login-required' selon ton besoin
          pkceMethod: 'S256',
          checkLoginIframe: false,
        });

        setKeycloak(keycloakInstance);
        setInitialized(true);

        if (authenticated) {
          const profile = await keycloakInstance.loadUserProfile();
          setUserProfile(profile);
        }

        // Nettoyer l’URL après login
        window.history.replaceState({}, document.title, window.location.pathname);

        // Rafraîchissement automatique du token
        setInterval(() => {
          keycloakInstance.updateToken(70).catch(() => {
            console.error('❌ Échec du rafraîchissement du token');
          });
        }, 60000);
      } catch (error) {
        console.error('❌ Échec de l\'initialisation Keycloak', error);
        setInitialized(true);
      }
    };

    initKeycloak();
  }, []);

  const login = () => keycloak?.login();
  const logout = () => keycloak?.logout({ redirectUri: window.location.origin });

  return (
    <KeycloakContext.Provider
      value={{
        keycloak,
        initialized,
        isAuthenticated: !!keycloak?.authenticated,
        login,
        logout,
        userProfile,
      }}
    >
      {initialized ? children : <div>🔐 Initialisation de la sécurité...</div>}
    </KeycloakContext.Provider>
  );
};
