import { AuthService,ConfigService } from 'core-ui';
export function initializeApp(configService:ConfigService, authService: AuthService): () => Promise<any> {
  return async() => {
    const config = configService.get('auth');
      return authService.init({
        config
      });
  }
}
