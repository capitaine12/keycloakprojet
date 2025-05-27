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
  standalone: true, 
  imports: [CommonModule],
})
export class PortailComponent {
  public apps: App[] = [];
  public origin = window.location.origin;
  keycloak: any;

  constructor(private router: Router, public keycloakService: KeycloakService) {
    this.apps = [
      { path: '/app1', image: 'assets/imgs/app1.png', name: 'App 1', color: 'blue', icon: '⭐' },
      { path: '/app2', image: 'assets/img/app2.png', name: 'App 2', color: 'green', icon: '🚀' },
    ];
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
  this.keycloak.logout({ redirectUri: typeof window !== 'undefined' ? window.location.origin : '/' });

}

}
