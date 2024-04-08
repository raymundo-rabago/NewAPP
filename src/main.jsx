
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider 
    domain="dev-sc1f20h3hg408oz3.us.auth0.com" 
    clientId="jbK4ILeIfyF3VzbZwKdirWJ5H3mmjWGm"
    authorizationParams={{ redirect_uri: window.location.origin }}>
    <App />
  </Auth0Provider>,
);