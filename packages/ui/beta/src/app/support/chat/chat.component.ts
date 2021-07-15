import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private readonly keycloak: KeycloakService) { }
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  async ngOnInit() {
      this.userProfile = await this.keycloak.loadUserProfile();
      
  }

}
