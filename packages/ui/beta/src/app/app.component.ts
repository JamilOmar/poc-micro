import {Component} from '@angular/core';
import {AuthService} from 'core-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'beta';
  links: any = [];
  info: any = {};
  constructor(private readonly authService: AuthService) {}
  public isLoggedIn = false;
  public userProfile: any = null;

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
    this.isLoggedIn = await this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      await this.authService.login();
    } else {
      this.userProfile = await this.authService.loadUserProfile();
    }
  }
}
