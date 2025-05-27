import React from 'react';
import ima2 from '../assets/ima2.png';
// import './Home.css';
function Home() {
  return (
    <div className="container">
      <h1 className="mb-4">Bienvenue sur Click & eat</h1>
      <p className="lead">Achetez vos tickets resto rapidement, consultez les menus, et mangez malin !</p>

      <div className="row mt-4">
      
        <div className="col">
          
         <img src={ima2} alt="Menu appétissant" className="img-fluid rounded shadow-sm mb-3" />
        </div>
      </div>

      <div className="card shadow p-4 mt-4">
        <h4>Fonctionnalités : </h4>
        <ul>
          <li>✔️ Achetez vos ticket Resto en un click</li>
          <li>✔️ Consultation du menu</li>
          <li>✔️ Réservée votre Plat (Pas) </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
