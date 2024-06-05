import React from 'react';
import { logout } from "../firebase";
import { Navbar, Button, IconButton } from "@material-tailwind/react";
import { IoPower } from 'react-icons/io5';

export const Header = () => {


  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 rounded-none">
      <div className='container mx-auto'>
        <div className="flex items-center justify-between text-gray-900">
          <img src="./soluxe.svg" className='w-28' />
          <div className="py-1.5">
            <Button variant="outlined" color="gray" size="sm" className="capitalize opacity-75 rounded-full flex items-center gap-3" onClick={logout}>Salir <IoPower /></Button>
          </div>
        </div>
      </div>
    </Navbar >
  )

}