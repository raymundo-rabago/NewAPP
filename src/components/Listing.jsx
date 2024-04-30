
import React, { useState } from 'react';
import { Drawer, Button, Typography, IconButton } from "@material-tailwind/react";

export const Listing = () => {

  return (
    <main id="Ventas" className='p-3 flex-col h-full'>
      <div className='container-lg'>
        <div>
          <Typography variant="h4">Listado de Ventas</Typography>
        </div>
        <div>
          <table>
            <thead>
              <tr><td>Data Title</td></tr>
            </thead>
            <tbody>
              <tr><td>Data Content</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}