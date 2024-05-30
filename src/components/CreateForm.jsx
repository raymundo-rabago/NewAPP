import React, { useState } from 'react';
 
const CreateForm = () => {

    const [product, setProduct] = useState("");

    const addProduct = (e) => {e.preventDefault();}

    return (
        <>
            <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="flex flex-col gap-6 h-auto">
                    <Input type="date" variant="outlined" size="lg" label="Fecha" placeholder="Dia/Mes/Año" color="gray" value={ } onChange={ } />
                    <Input type="text" variant="outlined" size="lg" label="Modelo" placeholder=" " color="gray" value={ } onChange={ } />
                    <Input type="text" variant="outlined" size="lg" label="Modelo" placeholder=" " color="gray" value={ } onChange={ } />
                </div>
                <Button fullWidth ripple={true} variant="filled" size="lg" className="mt-8 flex items-center text-center justify-center gap-2" onClick={ } >
                    Registrar
                </Button>
            </form>

            <h1>Añadir Venta</h1>
            <ul>
                <li>Modelo</li>
                <li>Fecha</li>
                <li>Cliente</li>
                <li>Precio</li>
                <li>Folio</li>
                <li>Estado</li>
                <li>Notas</li>
            </ul>

        </>
    )

}

export default CreateForm;