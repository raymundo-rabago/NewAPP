import React, { useState } from 'react';
import { Input, Button, Checkbox } from "@material-tailwind/react";

const CreateForm = () => {

    const [product, setProduct] = useState("");

    const addProduct = (e) => { e.preventDefault(); }

    return (
        <>
            <form className="mt-4 mb-2 w-full">
                <fieldset className="flex flex-col gap-4 h-auto">
                    <Input type="date" variant="outlined" size="md" label="Fecha" placeholder="Dia/Mes/Año" color="gray" />
                    <Input type="text" variant="outlined" size="md" label="Modelo" color="gray" />
                    <Input type="text" variant="outlined" size="md" label="Cliente" color="gray" />
                    <Input type="number" variant="outlined" size="md" label="Precio" color="gray" />
                    <Input type="text" variant="outlined" size="md" label="Folio" color="gray" />
                    <div className='flex justify-start mb-0 gap-2'>
                        <Checkbox label="Soluxe" />
                        <Checkbox label="Soluxeda" />
                    </div>
                    <div className='flex justify-start'>
                        <Checkbox label="Facturado en Optica" />
                    </div>
                </fieldset>
                <fieldset className="flex flex-row gap-6 h-auto">
                    <Button ripple={true} variant="text" size="sm" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2">
                        Cancelar
                    </Button>
                    <Button ripple={true} variant="gradient" size="sm" className="mt-8 w-1/2 flex items-center text-center justify-center gap-2">
                        Registrar
                    </Button>
                </fieldset>
            </form>

        </>
    )

}

export default CreateForm;