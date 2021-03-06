import {loadRemoteModule} from '@angular-architects/module-federation';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ShellService} from './shell.service';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RouteLoaderService {
  constructor(private shellService: ShellService, private router: Router) {}
  async loadModules() {
    const appRoutes = [...this.router.config];
    const apiRoutes =  await this.loadFromService() as any;
    for (let apiRoute of apiRoutes) {
      const remoteRoute = {
        path: apiRoute.path,
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: apiRoute.url,
            remoteName: apiRoute.remote,
            exposedModule: `./${apiRoute.module}`
          }).then((m) => m[apiRoute.module])
      };
      appRoutes.push(remoteRoute);
    }
    this.router.resetConfig(appRoutes);
    return;
  }
  async loadNavigation(localRoutes:any) {
    const apiRoutes =  await this.loadFromService() as any;
    const appRoutes=[];
    for (let apiRoute of apiRoutes) {
     
      appRoutes.push({url:apiRoute.path , name:apiRoute.name});
    }
    return [...localRoutes , ...appRoutes];
  }

  async loadFromService(){
    return this.shellService
      .getRoutes()
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          return of([]);
        })
      ).toPromise()
  }
}
