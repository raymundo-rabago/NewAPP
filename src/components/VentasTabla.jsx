
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const VentasTabla = () => {

  const [data, setData] = useState();

  useEffect(() => {
    async function getVentas(){
      const ventas = collection(db, 'Ventas');
      const data = await getDocs(ventas);
      // setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
  }, []);

  return (

    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Cliente</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map((venta) => (
          <tr key={ventas.id}>
            <td>{ventas.fecha}</td>
            <td>{ventas.modelo}</td>
            <td>{ventas.precio}</td>
            <td>{ventas.cliente}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}