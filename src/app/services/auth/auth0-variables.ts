interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '7n54v8Kw4qe9rLUSb3sxTvNdjYeMZpdm',
  domain: 'dev-e1w7n083.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
