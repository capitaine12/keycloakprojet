import React from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';

const Header: React.FC = () => {
  const { keycloak, isAuthenticated } = useKeycloak();

  const username =
    keycloak?.tokenParsed?.preferred_username ||
    keycloak?.tokenParsed?.name ||
    'Utilisateur';

  const handleLogout = () => {
    keycloak?.logout({
      redirectUri: window.location.origin,
    });
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Click & Eat</h1>

      {isAuthenticated && (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">👤 {username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Déconnexion
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
