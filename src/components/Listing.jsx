
import React, { useState } from 'react';
import { Drawer, Button, Typography, IconButton, Typography } from "@material-tailwind/react";

export const Listing = () => {

  return (
    <section id="Ventas">
      <div>
        <Typographi variant="h2">Listado de Ventas</>
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
    </section>
  );
}