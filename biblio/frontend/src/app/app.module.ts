import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeKeycloak } from './keycloak-init';
import { KeycloakService } from 'keycloak-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  providers: [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }
]

})
export class AppModule { }
