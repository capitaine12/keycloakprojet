import { Component, OnInit } from '@angular/core';
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
export class PortailComponent implements OnInit {
  public apps: App[] = [];
  public origin = window.location.origin;
  username: string = 'Utilisateur';

  constructor(private router: Router, public keycloakService: KeycloakService) {
    this.apps = [
      {
        path: 'cosmos',
        image: 'assets/imgs/g1.png',
        name: 'Cosmos X DOCS',
        color: 'blue',
        icon: 'assets/imgs/cx.png'
      },
      {
        path: 'clickeat',
        image: 'assets/imgs/g1.png',
        name: 'Click & Eat',
        color: 'green',
        icon: 'assets/imgs/School Cafeteria.png'
      },
      {
        path: 'classnote',
        image: 'assets/imgs/g2.png',
        name: 'Classe Note',
        color: 'green',
        icon: 'assets/imgs/School.png'
      }
    ];
  }

  ngOnInit() {
    const token = this.keycloakService.getKeycloakInstance().tokenParsed;
    if (token) {
      this.username = token['preferred_username'] || token['name'] || 'Utilisateur';
    }
  }

  goToApp(appRoute: string) {
    if (this.keycloakService.isLoggedIn()) {
      this.router.navigate([appRoute]);
    } else {
      this.keycloakService.login({
        redirectUri: this.origin + '/' + appRoute,
      });
    }
  }

  logout() {
    const logoutUrl = this.keycloakService.getKeycloakInstance().createLogoutUrl({
      redirectUri: window.location.origin
    });
    window.location.href = logoutUrl;
  }
}
