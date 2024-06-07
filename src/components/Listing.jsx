import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { Button, IconButton, Typography, Drawer, openDrawerRight } from "@material-tailwind/react";

import { IoAddCircle, IoClose, IoTodayOutline } from 'react-icons/io5';
import { HiOutlinePencilAlt, HiOutlineX } from "react-icons/hi";

import axios from 'axios';

import { VentasTabla } from './VentasTabla';
import { EditForm } from './EditForm';


export const Listing = () => {

  const api_url = 'https://api.sheetapi.rest/api/v1/sheet/gsgBKGkQLZhF6NzKDxc4Y';
  const [APIData, setAPIData] = useState([]);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const editItem = () =>{
    openDrawer();
  }

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
      cell: () => (<Button variant="text" onClick={editItem}><HiOutlinePencilAlt /></Button>)
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
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">Editar Venta</Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <HiOutlineX />
          </IconButton>
        </div>
        <EditForm />
      </Drawer>
    </>
  );

}