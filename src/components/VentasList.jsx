import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../firebase.js'; // Asegúrate de tener configurado firebaseConfig.js y exportar 'db'

export const VentasList = () => {

  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const ventasCol = collection(db, 'Ventas');
        const ventasSnapshot = await getDocs(ventasCol);
        const ventasList = ventasSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setVentas(ventasList);
      } catch (error) {
        console.error("Error fetching Ventas: ", error);
      }
    };

    fetchVentas();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Listado de Ventas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ventas.map(({ id, imagen, Descripcion, Modelo, Precio }) => (
          <div key={id} className="border rounded p-4">
            <img src={imagen} alt={Modelo} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{Modelo}</h3>
            <p>${Descripcion}</p>
            <p className="text-gray-600">${Precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};