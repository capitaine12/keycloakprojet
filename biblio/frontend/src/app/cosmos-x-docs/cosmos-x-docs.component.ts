import { Component } from '@angular/core';
import { CoursService } from './cours.service';
import { CommonModule } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-cosmos-x-docs',
  standalone: true,
  templateUrl: './cosmos-x-docs.component.html',
  styleUrls: ['./cosmos-x-docs.component.css'],
  imports: [CommonModule]
})
export class CosmosXDocsComponent {
  cours: any[] = [];
  username: string = 'Utilisateur';

  constructor(
    private coursService: CoursService,
    private keycloak: KeycloakService
  ) {}

  ngOnInit() {
    this.coursService.getCours().subscribe({
      next: (data: any[]) => this.cours = data,
      error: (err: any) => console.error('Erreur de chargement des cours', err)
    });

    const token = this.keycloak.getKeycloakInstance().tokenParsed;
    if (token) {
      this.username = token['preferred_username'] || token['name'] || 'Utilisateur';
    }
  }

logout() {
  const logoutUrl = this.keycloak.getKeycloakInstance().createLogoutUrl({
    redirectUri: window.location.origin
  });
  window.location.href = logoutUrl;
}


}
