import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, Typography, Drawer } from "@material-tailwind/react";
import { IoAddCircle, IoClose, IoTodayOutline } from 'react-icons/io5';

import { VentasTabla } from './VentasTabla';

export const Listing = () => {

  const api_url = import.meta.env.VITE_API_URL;
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(api_url).then((response) => {
      setAPIData(response.data);
    }).catch((err) => { console.log(err) });
  }, []);

  const columns = [
    {
      header: "Fecha",
      accessorKey: "Fecha",
      enableSorting: true,
    },
    {
      header: "Modelo",
      accessorKey: "Modelo",
    },
    {
      header: "Cliente",
      accessorKey: "Cliente",
    },
    {
      header: "Precio",
      accessorKey: "Precio",
      accessorFn: row => `$ ${row.Precio}`,
    },
    {
      header: "Editar",
      accessorKey: "Editar",
      // cell: () => <Button variant="text" size='sm' onClick={openDrawerRight()}>Editar</Button>
    }
  ];

  return (
    <>
      <main id="Ventas" className='p-4 flex-col h-full'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center py-2 mb-4'>
            <Typography variant="h5" className="uppercase leading-4"><small>Listado de</small><br />Ventas</Typography>
            <div className='flex flex-col justify-center'>
              <Link to="/registro"><Button variant="gradient" size="sm" className="flex items-center gap-3" >Añadir <IoAddCircle /></Button></Link>
            </div>
          </div>
          <div className='py-4'>
            <VentasTabla data={APIData} columns={columns} />
          </div>
        </div>
      </main>
    </>
  );

}