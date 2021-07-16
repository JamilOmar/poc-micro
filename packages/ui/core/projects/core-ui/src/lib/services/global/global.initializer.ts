import { ConfigService } from "../config";
import { KeycloakService } from "keycloak-angular";
import { AuthService } from "../auth/auth.service";

export async function initializer(
  configService:  ConfigService,
  authService:   AuthService

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
      return authService.init({
        config
      });
    
}