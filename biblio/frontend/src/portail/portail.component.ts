import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { CommonModule } from '@angular/common';

interface App {
  path: string;
  image: string;
  name: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-portail',
  templateUrl: './portail.component.html',
  styleUrls: ['./portail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PortailComponent {
  public apps: App[] = [];
  public origin = window.location.origin;
  username: string = 'Utilisateur';

  constructor(
    private router: Router,
    public keycloakService: KeycloakService
  ) {
    this.apps = [
      {
        path: 'cosmos',
        image: 'assets/imgs/cx.png',
        name: 'Cosmos X DOCS',
        color: 'blue',
        icon: 'assets/imgs/cosmos.png'
      },
      {
        path: 'click-eat',
        image: 'assets/imgs/g1.png',
        name: 'Click & Eat',
        color: 'green',
        icon: 'assets/imgs/School Cafeteria.png'
      },
      {
        path: 'classe-note',
        image: 'assets/imgs/g2.png',
        name: 'Classe Note',
        color: 'green',
        icon: 'assets/imgs/School.png'
      }
    ];
  }

  async ngOnInit() {
    const isLoggedIn = await this.keycloakService.isLoggedIn();

    if (isLoggedIn) {
      const token = this.keycloakService.getKeycloakInstance().tokenParsed;
      console.log('Token parsed:', token);
      this.username = token?.['name'] || token?.['preferred_username'] || 'Utilisateur';
    }
  }

  async goToApp(appRoute: string) {
    const isLoggedIn = await this.keycloakService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/' + appRoute]);
    } else {
      localStorage.setItem('target_app', appRoute);
      await this.keycloakService.login({
        redirectUri: this.origin
      });
    }
  }

  logout() {
    this.keycloakService.logout(window.location.origin);
  }
}
