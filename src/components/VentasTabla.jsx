
// https://github.com/vensi9/crud-operation-with-react.js-axios/blob/main/src/components/Read.js#L4
import React, { useState, useEffect } from 'react';
import { Card, Button, Typography } from "@material-tailwind/react";
import { IoEllipsisVertical } from 'react-icons/io5';

import axios from 'axios';

import "gridjs/dist/theme/mermaid.css";

export const VentasTabla = () => {

  const api_url = 'https://api.sheetapi.rest/api/v1/sheet/gsgBKGkQLZhF6NzKDxc4Y';
  const columns = ["Fecha", "Modelo", "Precio", ""];

  const [APIData, setAPIData] = useState([]);


  useEffect(() => {
    axios.get(api_url).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (

    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map((index) => (
              <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70" >
                  {index}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {APIData.map(({ Fecha, Modelo, Cliente, Precio }, id) => (
            <tr key={id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Fecha}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="black" className="font-normal">{Modelo}</Typography>
                <Typography variant="small">Vendido a: <strong>{Cliente}</strong></Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {Precio}
                </Typography>
              </td>
              <td className="p-4" width="6%">
                <Button variant="text"><IoEllipsisVertical /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}