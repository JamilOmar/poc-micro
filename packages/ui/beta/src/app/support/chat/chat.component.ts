import { Component, Injector, OnInit } from '@angular/core';
import {AuthService} from 'core-ui';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private authService:AuthService) { }
  public isLoggedIn = false;
  public userProfile: any | null = null;
  async ngOnInit() {
    this.userProfile = await this.authService.loadUserProfile();
  }

}
