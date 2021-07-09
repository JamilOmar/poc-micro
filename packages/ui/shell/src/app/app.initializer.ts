import {RouteLoaderService} from './services/route-loader.service';
export function initializeApp(routeLoaderService: RouteLoaderService): () => Promise<any> {
  return async() => {
    await routeLoaderService.loadModules();
    return;
  }
}
