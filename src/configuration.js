const configuration = {
    client_id: 'spa',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'code',
    post_logout_redirect_uri: 'http://localhost:3000/',
    scope: 'openid profile api1',
    authority: 'http://localhost:5000',
    silent_redirect_uri: 'http://localhost:3000/silent',
    automaticSilentRenew: true,
    loadUserInfo: true,
    triggerAuthFlow: true,
  };
  
  export default configuration;