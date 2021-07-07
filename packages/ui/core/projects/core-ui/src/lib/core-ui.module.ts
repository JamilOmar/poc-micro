import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    MatListModule
  ],
  exports: [
    CoreUiComponent,
    SideNavComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreUiModule { }
