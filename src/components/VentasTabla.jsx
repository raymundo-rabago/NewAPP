
// https://dev.to/debosthefirst/firebase-functions-to-build-a-serverless-crud-app-34kl
import React, { useState, useEffect } from 'react';
import { Button } from "@material-tailwind/react";
import { IoEllipsisVertical } from 'react-icons/io5';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableFooter, TableRow } from "@/components/ui/table";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const VentasTabla = () => {

  const collectionName = "Ventas";
  const getVentas = () => getDocs(collection(db, collectionName));
  const getVenta = (id) => getDoc(doc(db, collectionName, id));

  const [ventas, setVentas] = useState([]);

  const getLista = async () => {
    const querySnapshot = await getVentas();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setVentas(docs);
    // });
  };

  useEffect(() => {
    getLista();
  }, []);

  return (

    <Table>
      <TableCaption>No hay datos disponibles en este momento</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Fecha</TableHead>
          <TableHead>Modelo</TableHead>
          <TableHead>Precio</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="text-right">Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ventas.map((id => (
          <TableRow key={id}>
            <TableCell className="font-medium">{ventas.Fecha}</TableCell>
            <TableCell>{ventas.Modelo}</TableCell>
            <TableCell>{ventas.Precio}</TableCell>
            <TableCell>{ventas.Cliente}</TableCell>
            <TableCell className="text-right"><Button variant="text"><IoEllipsisVertical /></Button></TableCell>
          </TableRow>
        )))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Comisiones</TableCell>
          <TableCell className="text-right">$0.00 MXN</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

  );
}