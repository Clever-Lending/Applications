export interface AuthConfig {
  domain: string;
  clientId: string;
  authorizationParams: {
    audience: string;
  };
  apiUri: string;
  appUri: string;
  errorPath: string;
}
