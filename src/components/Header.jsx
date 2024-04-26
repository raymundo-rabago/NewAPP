import React from 'react';
import { NavLink } from "react-router-dom";

import { Navbar, Typography, Button, IconButton, Menu, MenuList, MenuItem } from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-gray-900">
        <Typography as="a" href="/" variant="h6" className="mr-4 cursor-pointer py-1.5">Soluxe</Typography>
        <div className="py-1.5">
          <Menu placement="bottom-end">
            <MenuHandler>
              <Button>Menu</Button>
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