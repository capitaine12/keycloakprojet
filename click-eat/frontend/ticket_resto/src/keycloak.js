import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/',
  realm: 'tickets_resto',
  clientId: 'react-app',
});

export default keycloak;