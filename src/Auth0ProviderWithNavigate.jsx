
import React from "react";
import { useNavigate } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

export const Auth0ProviderWithNavigate = ({ children }) => { 
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH_CLIENTID;
  const redirectUri = import.meta.env.VITE_AUTH_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri, }} onRedirectCallback={onRedirectCallback} >
      {children}
    </Auth0Provider>
  );
};