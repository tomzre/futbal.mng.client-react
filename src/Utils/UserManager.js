import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: 'spa',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile https://www.googleapis.com/auth/youtube.readonly',
  authority: 'https://accounts.google.com',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const configuration = {
    client_id: 'spa',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    post_logout_redirect_uri: 'http://localhost:3000',
    scope: 'openid profile api1',
    authority: 'http://localhost:5000',
    silent_redirect_uri: 'http://localhost:3000/silent',
    automaticSilentRenew: true,
    loadUserInfo: true,
    triggerAuthFlow: true,
    //post_logout_redirect_uri: 'http://localhost:3000'
  };

  const config = {
    client_id: 'oauthClient',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    post_logout_redirect_uri: 'http://localhost:3000',
    scope: 'openid profile api1.read',
    authority: 'https://localhost:5001',
    silent_redirect_uri: 'http://localhost:3000/silent',
    automaticSilentRenew: true,
    loadUserInfo: true,
    triggerAuthFlow: true,
  }

const userManager = createUserManager(config);

export default userManager;