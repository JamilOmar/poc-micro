import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{
  path: '',
  redirectTo: 'admin',
  pathMatch: 'full'

},
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
