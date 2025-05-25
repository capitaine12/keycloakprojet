import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { initializeKeycloak } from './app/keycloak-init';
import { KeycloakService } from 'keycloak-angular';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  if (environment.production) {
  enableProdMode();
}

// Charger Keycloak avant le bootstrap
initializeKeycloak(new KeycloakService()).then(() => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});