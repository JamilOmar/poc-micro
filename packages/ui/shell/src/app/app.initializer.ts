import {RouteLoaderService} from './services/route-loader.service';
import { AuthService,ConfigService , initializer } from 'core-ui';

export function initializeApp(configService:ConfigService, authService:AuthService, routeLoaderService: RouteLoaderService): () => Promise<any> {
  return async() => {
    await routeLoaderService.loadModules();
    return initializer(configService, authService);
  }
}
