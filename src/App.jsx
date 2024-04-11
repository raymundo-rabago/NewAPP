import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { AuthPage } from './components/AuthPage';

export function App() {
  return (
    <MantineProvider>
      <AuthPage />
    </MantineProvider>
  );
};