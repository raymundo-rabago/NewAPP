import React from 'react';
import { logout } from "../firebase";
import { Navbar, Button } from "@material-tailwind/react";
import { IoPower } from 'react-icons/io5';

export const Header = () => {

  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 rounded-none">
      <div className='m-auto sm:container'>
        <div className="flex items-center justify-between text-gray-900">
          <img src="./soluxe.svg" className='w-28' />
          <div className="py-1.5">
            <Button variant="outlined" color="gray" size="sm" className="capitalize rounded-full flex items-center gap-3" onClick={logout}>Salir <IoPower /></Button>
          </div>
        </div>
      </div>
    </Navbar>
  )

}