import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {SupportComponent} from './support.component';

const routes: Routes = [
  {
    path: '',
    component: SupportComponent,
    children: [
      {path: '', redirectTo: 'chat'},
      {path: 'chat', component: ChatComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule {}
