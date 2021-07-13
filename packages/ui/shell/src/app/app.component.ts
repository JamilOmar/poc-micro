import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shell';
  links:any =[];
  info:any ={};
  constructor(private readonly keycloak: KeycloakService) { }
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  async ngOnInit() {
    this.info ={
      title: 'Demo CRM',
      description:'Welcome to the Demo CRM'

    }
    this.links = [{
      url:['/orders'] , name:'Orders'},
      {url:['/users'] , name:'Users'},
      {url:['/admin'] , name:'Admin'},
      {url:['/alpha'] , name:'Alpha'},
      {url:['/beta'] , name:'Beta'}
    ]
    this.isLoggedIn = await this.keycloak.isLoggedIn();
  if (!this.isLoggedIn) {
    await this.keycloak.login();
  
  }else{
    
  this.userProfile = await this.keycloak.loadUserProfile();
  console.log(this.userProfile)
  }
  }
  
}
