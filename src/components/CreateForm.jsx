// https://github.com/vensi9/crud-operation-with-react.js-axios/tree/main;
import React, { useState } from 'react';
import { Input, Button, Checkbox } from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";

import axios from 'axios';
import { nanoid } from 'nanoid';
import { toast } from 'sonner';


const CreateForm = () => {

    const api_url = 'https://api.sheetapi.rest/api/v1/sheet/gsgBKGkQLZhF6NzKDxc4Y';
    const [APIData, setAPIData] = useState([]);

    const [Fecha, setFecha] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Cliente, setCliente] = useState('');
    const [Precio, setPrecio] = useState('');
    const [Folio, setFolio] = useState('');

    const [Soluxe, setSoluxe] = useState(false);
    const [Soluxeda, setSoluxeda] = useState(false);
    const [Optica, setOptica] = useState(false);

    const postData = () => {
        const Id = nanoid(8);
        axios.post(api_url, {
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
        .then( (res)=> console.log(res))
        .then( ()=> toast.success('Venta registrada!') )
        .catch( (err)=> console.log(err))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }

    return (
        <>
            <form className="mt-4 mb-2 w-full">
                <fieldset className="flex flex-col gap-4 h-auto">
                    <Input type="date" variant="outlined" size="md" label="Fecha" placeholder="Dia/Mes/Año" color="gray" onChange={(e) => setFecha(e.target.value)} />
                    <Input type="text" variant="outlined" size="md" label="Modelo" color="gray" onChange={(e) => setModelo(e.target.value)} />
                    <Input type="text" variant="outlined" size="md" label="Cliente" color="gray" onChange={(e) => setCliente(e.target.value)} />
                    <Input type="number" variant="outlined" size="md" label="Precio" color="gray" onChange={(e) => setPrecio(e.target.value)} />
                    <Input type="text" variant="outlined" size="md" label="Folio" color="gray" onChange={(e) => setFolio(e.target.value)} />
                    <div className='flex justify-start mb-0 gap-2'>
                        <Checkbox label="Soluxe" onChange={(e) => setSoluxe(!Soluxe)}/>
                        <Checkbox label="Soluxeda" onChange={(e) => setSoluxeda(!Soluxeda)} />
                    </div>
                    <div className='flex justify-start'>
                        <Checkbox label="Facturado en Optica" onChange={(e) => setOptica(!Optica)} />
                    </div>
                </fieldset>
                <fieldset className="flex flex-row gap-6 h-auto">
                    <Button ripple={true} variant="text" size="sm" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2" >
                        Cancelar
                    </Button>
                    <Button ripple={true} variant="gradient" size="sm" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2" onClick={ handleSubmit }>
                        Registrar
                    </Button>
                </fieldset>
            </form>

        </>
    )

}

export default CreateForm;