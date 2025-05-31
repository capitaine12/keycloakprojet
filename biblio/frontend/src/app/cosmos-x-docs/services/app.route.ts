import { Routes } from '@angular/router';
// Update the import path below to the correct relative location of cosmos-x-docs.component
import { CosmosXDocsComponent } from '../cosmos-x-docs.component';

export const routes: Routes = [
  { path: '', component: CosmosXDocsComponent },
  { path: '**', redirectTo: '' }
];