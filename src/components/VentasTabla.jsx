
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";

function VentasTabla() {
  const [ventas, setVentas] = useState([]);
  //const db = firebase.firestore();

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const ventasSnapshot = await db.collection('ventas').get();
        const ventasData = ventasSnapshot.docs.map((doc) => doc.data());
        setLibros(ventasData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVentas();
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

export default VentasTabla;