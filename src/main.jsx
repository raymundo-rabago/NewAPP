
import React from 'react';
import { createRoot } from 'react-dom/client';

import { ConfigProvider } from 'antd';
import { App } from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#0c0c0c', borderRadius: 4, colorBgContainer: '#efefef'} }} >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);