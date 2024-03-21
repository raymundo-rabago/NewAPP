import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

export default function Login() {

  return (
    <Container maxWidth="sm">
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="on">
          <Avatar alt="soluxe logo" variat="square" src="/assets/safari-pinned-tab.svg" sx={{ width: 96, height: 96 }} />
          <TextField required id="user" label="Usuario" defaultValue="Usuario" />
          <TextField required id="password" label="Contraseña" type="password" autoComplete="current-password" />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme"/>
          <LoadingButton loading variant="container" color="secondary" size="large">Submit</LoadingButton>
          <Typography variant="body2" color="textSecondary" align="center">Soluxe Sunglasses Boutique© 2024</Typography>
        </Box>
      </Grid>
    </Container>
  );
};