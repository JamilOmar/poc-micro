import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { ChatComponent } from './chat/chat.component';
import { KeycloakAngularModule } from 'keycloak-angular';
import { CoreUiModule } from '../../../../core/dist/core-ui/lib';

@NgModule({
  declarations: [
    SupportComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
  ]
})
export class SupportModule { }
