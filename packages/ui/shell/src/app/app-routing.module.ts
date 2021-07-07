import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
const URL_ALPHA = 'http://localhost:8001/remoteEntry.js';
const URL_BETA = 'http://localhost:8002/remoteEntry.js';
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
      remoteEntry: URL_ALPHA,
      remoteName: 'alpha',
      exposedModule: './StoresModule'
    })
    .then(m => m.StoresModule) 
},
{
  path: 'alpha-admin',
  loadChildren: () => loadRemoteModule({
      remoteEntry: URL_ALPHA,
      remoteName: 'alpha',
      exposedModule: './AdminModule'
    })
    .then(m => m.AdminModule) 
},
{
  path: 'beta',
  loadChildren: () => loadRemoteModule({
      remoteEntry: URL_BETA,
      remoteName: 'beta',
      exposedModule: './SupportModule'
    })
    .then(m => m.SupportModule) 
},
{
  path: 'beta-admin',
  loadChildren: () => loadRemoteModule({
      remoteEntry: URL_BETA,
      remoteName: 'beta',
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
