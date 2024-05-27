import React, { useState } from 'react';
import { Drawer, Button, Typography, IconButton } from "@material-tailwind/react";
import { Grid } from 'gridjs-react';
import { IoAddCircle } from 'react-icons/io5';

import { getSales, updateSale } from "../firebase";

export const Listing = () => {


  new Grid(){
    columns: ['Fecha', 'Modelo', 'Precio','Cliente', 'Pagado', 'Accion'],
    search: true,
    data : [],
    pagination: {
      limit: 3,
      summary: false
    },
    fixedHeader: true,
    language: {
      'search': {
        'placeholder': 'Buscar...'
      },
      'pagination': {
        'previous': 'Anterior',
        'next': 'Siguiente',
        'showing': 'Mostrando',
        'results': () => 'Resultados'
      }
    }
  }




  return (
    <main id="Ventas" className='p-4 flex-col h-full'>
      <div className='container-lg'>
        <div className='flex justify-between align-middle py-2 mb-4'>
          <Typography variant="h5" className="uppercase">Listado<br />de Ventas</Typography>
          <div className='flex flex-col justify-center'>
            <Button variant="gradiente" size="sm" className="flex items-center gap-3">Añadir <IoAddCircle /></Button>
          </div>
        </div>
        <div className='py-4'>
          <Grid data={}
            columns={['Fecha', 'Modelo', 'Precio','Cliente', 'Pagado', 'Accion']}
            search={true}
            pagination={{
              limit: 3,
            }}
          />
        </div>
      </div>
    </main>

  );
}