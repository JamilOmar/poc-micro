import {Component} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'beta';
  links: any = [];
  info: any = {};
  constructor(private readonly keycloak: KeycloakService) {}
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  async ngOnInit() {
    this.info = {
      title: 'Beta Service',
      description: 'Welcome to the Beta Service'
    };
    this.links = [
      {
        url: ['/support'],
        name: 'Support'
      },
      {url: ['/admin'], name: 'Admin'}
    ];
    this.isLoggedIn = await this.keycloak.isLoggedIn();
    if (!this.isLoggedIn) {
      await this.keycloak.login();
    } else {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }
}
