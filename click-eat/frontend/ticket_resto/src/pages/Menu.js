import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';

const MenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [filter, setFilter] = useState('dejeuner'); // Valeur par défaut

  // Liste des jours dans l'ordre
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

  // Fetch selon filtre
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/menus/?type_menu=${filter}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des menus');
        }
        return response.json();
      })
      .then((data) => {
        setMenus(data);
      })
      .catch((error) => {
        console.error('Erreur :', error);
      });
  }, [filter]);

  // Affichage par jour
  const menusParJour = jours.map((jour) => {
    const platsDuJour = menus.filter(menu => menu.jour?.toLowerCase() === jour);

    if (platsDuJour.length === 0) return null;

    return (
      <div key={jour} style={{ marginBottom: '30px' }}>
        <h4>{jour.charAt(0).toUpperCase() + jour.slice(1)}</h4>
        <Row>
          {platsDuJour.map((menu) => (
            <Col md={4} sm={6} xs={12} key={menu.id} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{menu.nom}</Card.Title>
                  <Card.Text>{menu.description}</Card.Text>
                  <Card.Text><strong>Prix :</strong> {menu.prix} FCFA</Card.Text>
                  <Card.Text><strong>Jour :</strong> {menu.jour}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  });

  return (
    <Container>
      <h2 className="mb-4">Menus de la semaine</h2>

      {/* Boutons de filtre */}
      <ButtonGroup className="mb-4">
        <Button variant={filter === 'dejeuner' ? 'primary' : 'outline-primary'} onClick={() => setFilter('dejeuner')}>Déjeuner</Button>
        <Button variant={filter === 'diner' ? 'primary' : 'outline-primary'} onClick={() => setFilter('diner')}>Dîner</Button>
      </ButtonGroup>

      {menusParJour}
    </Container>
  );
};

export default MenuPage;
