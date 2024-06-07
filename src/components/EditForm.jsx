import React, { useState } from 'react';
import { Button, Input, Typography, Checkbox } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const EditForm = (ref) => {


    return (
        <form className="mt-4 mb-2 w-full" >
            <fieldset className="flex flex-col gap-4 h-auto">
                <Input type="date" variant="outlined" size="md" label="Fecha" placeholder="Dia/Mes/Año" color="gray" onChange={(e) => setFecha(e.target.value)} />
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
                <Link to="/admin" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2 opacity-75">
                    <Button ripple={true} variant="outlined" size="sm" fullWidth>
                        Cancelar
                    </Button>
                </Link>
                <Button type="submit" ripple={true} variant="gradient" size="sm" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2">
                    Actualizar
                </Button>
            </fieldset>
        </form>
    )
}