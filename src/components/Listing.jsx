import React, { useState } from 'react';
import { Drawer, Button, Typography, IconButton } from "@material-tailwind/react";
import { Grid } from 'gridjs-react';
import { IoAddCircle } from 'react-icons/io5';

import { getSales, updateSale } from "../firebase";

export const Listing = () => {

  const row = () => [];
  const [data, setData] = useState([row()]);
  const update = () => { };

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
          <Grid
            data={[
              ['John', 'john@example.com'],
              ['Mike', 'mike@gmail.com']
            ]}
            columns={['Name', 'Email']}
            search={true}
            pagination={{
              limit: 1,
            }}
          />
        </div>
      </div>
    </main>
    /*
      <ul>
          <li>Modelo</li>
          <li>Fecha</li>
          <li>Descripcion</li>
          <li>Cliente</li>
          <li>Precio</li>
          <li>Baja</li>
          <li>Ticket</li>
          <li>Factura</li>
          <li>Soluxe</li>
          <li>Soluxeda</li>
          <li>Apartado</li>
          <li>Credito</li>
          <li>Facturacion</li>
          <li>Pago</li>
          <li>Imagen</li>
      </ul>
    */
  );
}