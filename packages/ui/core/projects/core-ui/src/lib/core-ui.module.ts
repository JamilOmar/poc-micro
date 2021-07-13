import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreUiComponent } from './core-ui.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_CONF ,ConfigService, CoreUiModuleSettings } from './services';
import { KeycloakAngularModule } from 'keycloak-angular';
@NgModule({
  declarations: [
    CoreUiComponent,
    SideNavComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    KeycloakAngularModule
  ],
  exports: [
    CoreUiComponent,
    SideNavComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreUiModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreUiModule) {
    if (parentModule) {
        throw new Error('CoreUiModule is already loaded. Import it in the root app module only');
    }
}
static forRoot(
    settings: CoreUiModuleSettings = {
        appConf: {}
    },
): ModuleWithProviders<CoreUiModule> {
    return {
        ngModule: CoreUiModule,
        providers: [
            ConfigService,
            { provide: APP_CONF, useValue: settings.appConf }
        ],
    };
}
 }
