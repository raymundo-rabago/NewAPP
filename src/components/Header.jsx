import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  
  return (

    <Grid>
      <Grid.Container>
      <ButtonDropdown type="secondary" scale={0.5} >
        <ButtonDropdown.Item>Ventas</ButtonDropdown.Item>
        <ButtonDropdown.Item>Clientes</ButtonDropdown.Item>
        <ButtonDropdown.Item>Salir</ButtonDropdown.Item>
      </ButtonDropdown>
      </Grid.Container>
    </Grid>

  )

}

export default Header;