import { ConfigService , AuthService, initializer } from 'core-ui';
import { KeycloakService } from 'keycloak-angular';
export function initializeApp(configService:ConfigService,authService: AuthService): () => Promise<any> {
  return async() => {
    return initializer(configService,authService);
  }
}
