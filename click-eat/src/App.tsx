import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { KeycloakProvider } from './contexts/KeycloakContext';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

import ProtectedRoute from './components/auth/ProtectedRoute';



function App() {
  return (
    <KeycloakProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="cart" element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            } />
            
          </Route>
        </Routes>
      </Router>
    </KeycloakProvider>
  );
}

export default App;