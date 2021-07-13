import {RouteLoaderService} from './services/route-loader.service';
import { authInitializer ,ConfigService } from 'core-ui';
import { KeycloakService } from 'keycloak-angular';
export function initializeApp(configService:ConfigService, routeLoaderService: RouteLoaderService , keycloak: KeycloakService): () => Promise<any> {
  return async() => {
 
    await routeLoaderService.loadModules();
    await authInitializer(configService , keycloak)
    return;
  }
}
