import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderNav = ({ children }) => {
  const navigate = useNavigate();

  const domain = 'dev-sc1f20h3hg408oz3.us.auth0.com';
  const clientId = 'jbK4ILeIfyF3VzbZwKdirWJ5H3mmjWGm';
  const redirectUri = 'http://localhost:5173/';

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
