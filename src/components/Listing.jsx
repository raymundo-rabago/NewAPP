
import React, { useState } from 'react';

export const Listing = () => {

  return (
    <div className="Listing">
      <h3>Listado de Ventas</h3>
      <Link to="/registro" className="btn_app">Añadir Registro</Link>
      <table>
        <thead>
          <tr><td>Data Title</td></tr>
        </thead>
        <tbody>
          <tr><td>Data Content</td></tr>
        </tbody>
      </table>
    </div>
  );
}