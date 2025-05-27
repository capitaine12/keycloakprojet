import React from 'react';
import { FaHome, FaUtensils, FaUser,FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar  text-white p-3 mod-sid" style={{ width: '220px' }}>
      <div className="mb-5 text-center">
        <FaUser size={40} />
        <h5 className="mt-2">Mouhamed Diarisso</h5>
      </div>
      <nav className="d-flex flex-column gap-3">
        <Link to="/" className="text-white text-decoration-none"><FaHome className="me-2" /> Accueil</Link>
        <Link to="/menu" className="text-white text-decoration-none"><FaUtensils className="me-2" /> Menu</Link>
        <Link to="/ticket" className="text-white text-decoration-none"><FaBeer className="me-2" />Buy Ticket</Link>

      </nav>
    </div>
  );
}

export default Sidebar;
