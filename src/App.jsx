import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Your theme override here */
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <h1>Homepage</h1>
    </MantineProvider>
  );
}

export default App;