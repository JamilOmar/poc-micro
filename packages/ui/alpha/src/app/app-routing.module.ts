import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full'
},
{ path: 'stores', loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule) }, 
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
