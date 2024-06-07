import React, { useState } from 'react';
 

export const EditForm = (ref) => {

    const itemId = {ref};

    const handleSubmit = {
        console.log('edited form');
    }

    return (
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
    )
}