import React from 'react';

import { Navbar, Typography, Button, IconButton, Menu, MenuList, MenuItem, MenuHandler } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Header = () => {

  return (
    <Navbar className="mx-auto px-4 py-2 rounded-none">
      <div className="flex items-center justify-between text-gray-900">
        <img src="./soluxe.svg" className='w-28' />
        <div className="py-1.5">
          <Menu placement="bottom-end">
            <MenuHandler allowHover>
              <Button variant="outlined" size="sm">Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Ventas</MenuItem>
              <MenuItem>Clientes</MenuItem>
              <hr className="my-2" />
              <MenuItem>Salir</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </Navbar>
  )

}