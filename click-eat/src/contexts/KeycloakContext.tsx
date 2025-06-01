// src/contexts/KeycloakContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { KeycloakProfile } from 'keycloak-js';
import Keycloak from 'keycloak-js';

type KeycloakContextType = {
  keycloak: Keycloak | null;
  initialized: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userProfile: any;
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
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [userProfile, setUserProfile] = useState<KeycloakProfile | null>(null);


  useEffect(() => {
    const initKeycloak = async () => {
      const keycloakInstance = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'saturne',
        clientId: 'click-eat',
      });

      try {
        const authenticated = await keycloakInstance.init({
          onLoad: 'login-required',
          checkLoginIframe: false,
          pkceMethod: 'S256',
          enableLogging: true,
          flow: 'standard',
        });

        setKeycloak(keycloakInstance);
        setInitialized(true);

        if (authenticated) {
          const profile = await keycloakInstance.loadUserProfile();
          setUserProfile(profile);
        }

        // Rafraîchissement automatique du token
        setInterval(() => {
          keycloakInstance
            .updateToken(70)
            .catch(() => console.error('Échec de la mise à jour du token'));
        }, 60000);
      } catch (error) {
        console.error('❌ Échec de l\'initialisation Keycloak', error);
        setInitialized(true);
      }
    };

    initKeycloak();
  }, []);

  const login = () => {
    if (keycloak) keycloak.login();
  };

  const logout = () => {
    if (keycloak) keycloak.logout({ redirectUri: window.location.origin });
  };

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
      {initialized ? children : <div>Initialisation en cours...</div>}
    </KeycloakContext.Provider>
  );
};
