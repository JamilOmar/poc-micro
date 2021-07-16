import {Component} from '@angular/core';
import {AuthService} from 'core-ui'
import {RouteLoaderService} from './services/route-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'shell';
  links: any = [];
  info: any = {};
  constructor(private readonly routeLoaderService: RouteLoaderService, private readonly authService: AuthService) {}
  public isLoggedIn = false;
  public userProfile: any = null;
  async ngOnInit() {
    this.info = {
      title: 'Demo CRM',
      description: 'Welcome to the Demo CRM'
    };
    this.links = await this.routeLoaderService.loadNavigation([
      {
        url: ['/orders'],
        name: 'Orders'
      },
      {url: ['/users'], name: 'Users'},
      {url: ['/admin'], name: 'Admin'},
      {url: ['/beta'], name: 'Beta'}
    ]);
    this.isLoggedIn = await this.authService.isLoggedIn();
    if (!this.isLoggedIn) {
      await this.authService.login();
    } else {
      this.userProfile = await this.authService.loadUserProfile();
    }
  }
}
