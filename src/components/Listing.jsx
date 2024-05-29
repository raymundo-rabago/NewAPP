import React, { useState, useEffect } from 'react';
import { Drawer, Button, Typography, IconButton } from "@material-tailwind/react";
import { IoAddCircle } from 'react-icons/io5';

import { VentasTabla } from './VentasTabla';

export const Listing = () => {

  return (
    <main id="Ventas" className='p-4 flex-col h-full'>
      <div className='container-lg'>
        <div className='flex justify-between align-middle py-2 mb-4'>
          <Typography variant="h5" className="uppercase">Listado<br />de Ventas</Typography>
          <div className='flex flex-col justify-center'>
            <Button variant="gradient" size="sm" className="flex items-center gap-3">Añadir <IoAddCircle /></Button>
          </div>
        </div>
        <div className='py-4'>
            <VentasTabla />
        </div>
      </div>
    </main>
  );

}