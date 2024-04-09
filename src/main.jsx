
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Auth0Provider } from "@auth0/auth0-react";

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

// https://github.com/auth0-developer-hub/spa_react_javascript_hello-world/tree/main

const domain = import.meta.env.VITE_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_AUTH_CLIENTID;

root.render(
  <React.StrictMode>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} >
        <App />
      </Auth0Provider>
    </React.StrictMode>,
);