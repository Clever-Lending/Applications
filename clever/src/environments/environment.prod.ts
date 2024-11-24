import { AUTH_CONFIG } from '../app/auth-config';

export const environment = {
  production: true,
  auth: {
    domain: AUTH_CONFIG.domain,
    clientId: AUTH_CONFIG.clientId,
    ...(AUTH_CONFIG.authorizationParams.audience &&
    AUTH_CONFIG.authorizationParams.audience !== 'YOUR_API_IDENTIFIER'
      ? { audience: AUTH_CONFIG.authorizationParams.audience }
      : null),
    redirectUri: window.location.origin,
    errorPath: AUTH_CONFIG.errorPath,
  },
  httpInterceptor: {
    allowedList: [`${AUTH_CONFIG.apiUri}/*`],
  },
};
