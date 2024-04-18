import React, { useState } from 'react';
 
const Footer = () => {

    const [product, setProduct] = useState("")
    const addProduct = (e) => {e.preventDefault();}

    return (
        <>
            <h1>Añadir Venta</h1>
            <ul>
                <li>Modelo</li>
                <li>Fecha</li>
                <li>Descripcion</li>
                <li>Cliente</li>
                <li>Precio</li>
                <li>Baja</li>
                <li>Ticket</li>
                <li>Factura</li>
                <li>Soluxe</li>
                <li>Soluxeda</li>
                <li>Apartado</li>
                <li>Credito</li>
                <li>Facturacion</li>
                <li>Pago</li>
                <li>Imagen</li>
            </ul>
        </>
    )

}

export default Footer