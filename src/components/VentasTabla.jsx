
// https://dev.to/debosthefirst/firebase-functions-to-build-a-serverless-crud-app-34kl
import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";

import { app, db } from "../firebase";

export const VentasTabla = () => {

  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        if (!app) return;

        const ref = db.collection("Ventas");

        const docs = await ref.get();

        let allVentas = [];
        docs.forEach((doc) => {
          const data = doc.data();
          allVentas.push(data.venta);
        });
        setVentas(allVentas);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchVentas();
  });


  const TABLE_HEAD = ["Fecha", "Modelo", "Precio", "Cliente", "Folio", "Estado", "Nota", " " ];

  return (

    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70" >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ventas.map(({ id, Fecha, Modelo, Precio }, index) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Fecha}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Modelo}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Precio}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Cliente}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Folio}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Estado}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Nota}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Editar
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>

  );
}