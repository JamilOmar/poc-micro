import { Component } from '@angular/core';
import {AuthService} from 'core-ui'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alpha';
  links:any =[];
  info:any ={};
  constructor( readonly authService: AuthService) {}
  public isLoggedIn = false;
  public userProfile: any = null;

  async ngOnInit() {
    this.info ={
      title: 'Alpha Service',
      description:'Welcome to the Alpha Service'

    }
    this.links = [{
      url:['/stores'] , name:'Stores'},
      {url:['/admin'] , name:'Admin'},
    ]
    this.isLoggedIn = await this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      await this.authService.login();
    } else {
      this.userProfile = await this.authService.loadUserProfile();
    }
  }
}
