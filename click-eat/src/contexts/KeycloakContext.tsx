import React, { createContext, useContext, useEffect, useState } from 'react';
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
  const [initialized, setInitialized] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const initKeycloak = async () => {
      try {
        // In a real app, these values would come from environment variables
        const keycloakInstance = new Keycloak({
          url: 'http://localhost:8080/auth',
          realm: 'saturne',
          clientId: 'click-eat',
        });

        const authenticated = await keycloakInstance.init({
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        });

        setKeycloak(keycloakInstance);
        setInitialized(true);

        if (authenticated) {
          const profile = await keycloakInstance.loadUserProfile();
          setUserProfile(profile);
        }

        // Set up token refresh
        setInterval(() => {
          keycloakInstance.updateToken(70).catch(() => {
            console.error('Failed to refresh token');
          });
        }, 60000);
      } catch (error) {
        console.error('Failed to initialize Keycloak', error);
        setInitialized(true);
      }
    };

    initKeycloak();
  }, []);

  const login = () => {
    if (keycloak) {
      keycloak.login();
    }
  };

  const logout = () => {
    if (keycloak) {
      keycloak.logout();
    }
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
      {children}
    </KeycloakContext.Provider>
  );
};