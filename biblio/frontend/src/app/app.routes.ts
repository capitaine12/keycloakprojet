/* import { Routes } from '@angular/router';

export const routes: Routes = []; */

import { Routes } from '@angular/router';
import { PortailComponent } from '../portail/portail.component';
import { KeycloakAuthGuard } from 'keycloak-angular';

export const routes: Routes = [
  {
    path: '',
    component: PortailComponent
  },
  {
    path: 'cosmos',
    loadComponent: () =>
    import('./cosmos-x-docs/cosmos-x-docs.component').then(m => m.CosmosXDocsComponent),
    canActivate: [KeycloakAuthGuard],
    data: { roles: [] }
  }, 
  /*
  {
    path: 'click-eat',
    loadComponent: () =>
      import('./click-eat/click-eat.component').then(m => m.ClickEatComponent),
    canActivate: [KeycloakAuthGuard],
    data: { roles: [] }
  },
   {
    path: 'classe-note',
    loadComponent: () =>
      import('./classe-note/classe-note.component').then(m => m.ClasseNoteComponent),
    canActivate: [KeycloakAuthGuard],
    data: { roles: [] }
  } */
];
