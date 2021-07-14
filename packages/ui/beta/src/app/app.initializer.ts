import { ConfigService } from 'core-ui';
import { KeycloakService } from 'keycloak-angular';
export function initializeApp(configService:ConfigService, keycloak: KeycloakService): () => Promise<any> {
  return async() => {
    const config = configService.get('auth');
      return keycloak.init({
        config
      });
  }
}
