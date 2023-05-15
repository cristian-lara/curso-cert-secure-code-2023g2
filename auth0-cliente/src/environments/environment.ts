export const environment = {
  production: false,
  auth0: {
    domain: "xxx.us.auth0.com",
    clientId: "xxx",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }
};
