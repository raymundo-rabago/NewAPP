import React from 'react';
import { auth, logout } from "../firebase";





const Menu = () => {
  const content = () => (
    <>
      <Popover.Item>
        <Link color href="#">Ventas</Link>
      </Popover.Item>
      <Popover.Item>
        <Link color href="#">Clientes</Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <Link onClick={logout} ><LogOut/> Salir</Link>
      </Popover.Item>
    </>
  )
  return (
    <Popover content={content}>
      <MoreVertical />
    </Popover>
  )
}


export default Menu;