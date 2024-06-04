import React, { useState } from 'react';
import { Input, Button } from "@material-tailwind/react";

const CreateForm = () => {

    const [product, setProduct] = useState("");

    const addProduct = (e) => { e.preventDefault(); }

    return (
        <>
            <form className="mt-4 mb-2 w-full">
                <fieldset className="flex flex-col gap-6 h-auto">
                    <Input type="date" variant="outlined" size="md" label="Fecha" placeholder="Dia/Mes/Año" color="gray" />
                    <Input type="text" variant="outlined" size="md" label="Modelo" placeholder=" " color="gray" />
                    <Input type="text" variant="outlined" size="md" label="Cliente" placeholder=" " color="gray" />
                    <Input type="number" variant="outlined" size="md" label="Precio" placeholder=" " color="gray" />
                </fieldset>
                <fieldset className="flex flex-row gap-6 h-auto">
                    <Button ripple={true} variant="text" size="sm" className="mt-8 flex items-center text-center justify-center gap-2">
                        Cancelar
                    </Button>
                    <Button ripple={true} variant="gradient" size="sm" className="mt-8 flex items-center text-center justify-center gap-2">
                        Registrar
                    </Button>
                </fieldset>
            </form>

        </>
    )

}

export default CreateForm;