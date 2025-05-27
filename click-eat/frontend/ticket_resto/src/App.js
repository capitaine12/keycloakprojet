import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Keycloak from 'keycloak-js';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import Ticket from './pages/Ticket';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',           // URL de ton serveur Keycloak
  realm: 'ticket-resto',                   // Nom de ton realm
  clientId: 'react-client'                 // ID de ton client (côté frontend)
});

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState(null);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(auth => {
      setAuthenticated(auth);
      setKeycloakInstance(keycloak);
    });
  }, []);

  if (!keycloakInstance) {
    return <div>Chargement de l'authentification...</div>;
  }

  if (!authenticated) {
    return <div>Authentification en cours...</div>;
  }

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Header */}
        <Header />

        {/* Contenu principal */}
        <div className="d-flex flex-grow-1">
          <Sidebar />
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
