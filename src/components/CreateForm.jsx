// https://github.com/vensi9/crud-operation-with-react.js-axios/tree/main;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";

import { IoTodayOutline } from 'react-icons/io5';
import { IoMdArrowBack } from "react-icons/io";

import { Toaster } from 'sonner';

import axios from 'axios';
import { nanoid } from 'nanoid';
import { toast } from 'sonner';


export const CreateForm = () => {

    const api_url = 'https://api.sheetapi.rest/api/v1/sheet/gsgBKGkQLZhF6NzKDxc4Y';

    const [Id, setId] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Cliente, setCliente] = useState('');
    const [Precio, setPrecio] = useState('');
    const [Folio, setFolio] = useState('');

    const [Soluxe, setSoluxe] = useState(false);
    const [Soluxeda, setSoluxeda] = useState(false);
    const [Optica, setOptica] = useState(false);

    const inputs = document.querySelectorAll('input, date, number, textarea , checkbox');

    const postData = async () => {
        const Id = nanoid(8);
        try {
            await axios.post(api_url, {
                Id,
                Fecha,
                Modelo,
                Cliente,
                Precio,
                Folio,
                Soluxe,
                Soluxeda,
                Optica
            }) 
        } catch (err) {
            console.log(err)
        } finally {
            inputs.forEach((input) => (input.value = ''));
            toast.success('Venta registrada!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }

    return (
        <main id="Ventas" className='p-4 flex-col h-full'>
            <div className='container mx-auto'>
                <div className='flex justify-between align-middle py-2 mb-4'>
                    <Typography variant="h5" className="leading-4 flex items-center gap-2"><IoTodayOutline /> Registro de Venta</Typography>
                    <div className='flex flex-col justify-center'>
                        <Link to="/admin"><Button variant="text" size="sm" className="flex items-center gap-2"><IoMdArrowBack /> Regresar</Button></Link>
                    </div>
                </div>
                <div className='py-4'>
                    <form className="mt-4 mb-2 w-full"  key={Id} onSubmit={handleSubmit}>
                        <fieldset className="flex flex-col gap-4 h-auto">
                            <Input type="date" variant="outlined" size="md" label="Fecha" placeholder="Dia/Mes/Año" color="gray" value={Fecha} onChange={(e) => setFecha(e.target.value)} />
                            <Input type="text" variant="outlined" size="md" label="Modelo" color="gray" onChange={(e) => setModelo(e.target.value)} />
                            <Input type="text" variant="outlined" size="md" label="Cliente" color="gray" onChange={(e) => setCliente(e.target.value)} />
                            <Input type="number" variant="outlined" size="md" label="Precio" color="gray" onChange={(e) => setPrecio(e.target.value)} />
                            <Input type="text" variant="outlined" size="md" label="Folio" color="gray" onChange={(e) => setFolio(e.target.value)} />
                            <div className='flex justify-start mb-0 gap-2 flex-wrap md:flex-nowrap'>
                                <Checkbox label="Soluxe" onChange={(e) => setSoluxe(!Soluxe)} />
                                <Checkbox label="Soluxeda" onChange={(e) => setSoluxeda(!Soluxeda)} />
                                <Checkbox label="Facturado en Optica" onChange={(e) => setOptica(!Optica)} />
                            </div>

                        </fieldset>
                        <fieldset className="flex flex-row gap-6 h-auto">
                            <Link to="/admin" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2">
                                <Button ripple={true} variant="outlined" size="sm" fullWidth>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" ripple={true} variant="gradient" size="sm" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2">
                                Registrar
                            </Button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <Toaster richColors position="bottom-left" />
        </main>
    )

};