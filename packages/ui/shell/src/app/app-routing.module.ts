import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
const URL = 'http://localhost:4201/remoteEntry.js';
const routes: Routes = [{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{
  path: '',
  redirectTo: 'orders',
  pathMatch: 'full'
},
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
{
  path: 'alpha',
  loadChildren: () => loadRemoteModule({
      remoteEntry: URL,
      remoteName: 'alpha',
      exposedModule: './StoresModule'
    })
    .then(m => m.StoresModule) 
},
{
  path: 'alpha-admin',
  loadChildren: () => loadRemoteModule({
      remoteEntry: URL,
      remoteName: 'alpha',
      exposedModule: './AdminModule'
    })
    .then(m => m.AdminModule) 
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
