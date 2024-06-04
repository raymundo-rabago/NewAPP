import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, IconButton, Typography, Drawer } from "@material-tailwind/react";
import { IoAddCircle, IoClose, IoTodayOutline } from 'react-icons/io5';

import { VentasTabla } from './VentasTabla';
import CreateForm from './CreateForm';

export const Listing = () => {

  const api_url = 'https://api.sheetapi.rest/api/v1/sheet/gsgBKGkQLZhF6NzKDxc4Y';
  const [APIData, setAPIData] = useState([]);

  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  useEffect(() => {
    axios.get(api_url).then((response) => {
      setAPIData(response.data);
    }).catch( (err)=>{console.log(err)});
  }, []);

  const columns = [
    {
      header: "Fecha",
      accessorKey: "Fecha",
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
    /* {
      header: "Editar",
      accessorKey: "Id",
      cell: () => {
        return <Button variant="text" size='sm' onClick={openDrawerRight}>Editar</Button>
      }
    } */
  ];

  return (
    <>
      <main id="Ventas" className='p-4 flex-col h-full'>
        <div className='m-auto sm:container'>
          <div className='flex justify-between align-middle py-2 mb-4'>
            <Typography variant="h5" className="uppercase leading-4"><small>Listado de</small><br />Ventas</Typography>
            <div className='flex flex-col justify-center'>
              <Button variant="gradient" size="sm" className="flex items-center gap-3" onClick={openDrawerRight}>Añadir <IoAddCircle /></Button>
            </div>
          </div>
          <div className='py-4'>
            <VentasTabla data={APIData} columns={columns} />
          </div>
        </div>
      </main>
      <Drawer placement="right" open={openRight} onClose={closeDrawerRight} className="p-4" >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className='flex items-center'><IoTodayOutline /> <span className='ml-2'>Venta</span></Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerRight}><IoClose /></IconButton>
        </div>
        <CreateForm />
      </Drawer>
    </>
  );

}