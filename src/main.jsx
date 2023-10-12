
import React from 'react';
import { AuthProvider } from './AuthContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <App />
  </AuthProvider>
);
