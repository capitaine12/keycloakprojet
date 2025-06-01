import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import Cart from '../components/cart/Cart';
import Header from './Header';

const MainLayout: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <Navbar toggleCart={toggleCart} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  );
};

export default MainLayout;