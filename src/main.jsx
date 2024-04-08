
import React from 'react';
import ReactDOM from 'react-dom/client';

import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderNav } from "./Auth0ProviderNav";

import App from './App.jsx';

const container = document.getElementById("root");
const root = createRoot(container);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderNav>
        <App />
      </Auth0ProviderNav>
    </BrowserRouter>
  </React.StrictMode>
)
