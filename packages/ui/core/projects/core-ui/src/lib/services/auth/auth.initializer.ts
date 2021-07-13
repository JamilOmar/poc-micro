import { ConfigService } from "../config";
import { KeycloakService } from "keycloak-angular";

export async function authInitializer(
  configService:  ConfigService,
  keycloak: KeycloakService
  ) {


      let config = configService.get('auth');

      console.log(config)
      /**
      : {
          url: 'http://localhost:8080' + '/auth',
          realm: 'test',
          clientId: 'frontend',
        }
       */
      return keycloak.init({
        config
      });
    
}