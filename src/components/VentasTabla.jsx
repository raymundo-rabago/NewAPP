
// https://github.com/vensi9/crud-operation-with-react.js-axios/blob/main/src/components/Read.js#L4
import React, {useState, useEffect}from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { IoCreateOutline } from 'react-icons/io5';

import axios from 'axios';

export const VentasTabla = () => {

  const api_url = 'https://api.sheetapi.rest/api/v1/sheet/gsgBKGkQLZhF6NzKDxc4Y';
  const columns = ['Fecha','Modelo','Precio',''];

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(api_url)
      .then((response) => {
        setAPIData(response.data);
      })
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
  }

  const getData = () => {
    axios.get(api_url)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  return (
     <Card className="h-full w-full rounded-sm xs:overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map((head) => (
              <th key={head} className="border-b border-gray-100 bg-gray-100 p-3">
                <Typography variant="small" color="black" className="font-normal leading-none opacity-70" >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {APIData.map((data) => {
              return (
                <tr key={data.Id} className="even:bg-gray-50/50">
                  <td className="p-3">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data.Fecha}
                    </Typography>
                  </td>
                  <td className="p-3">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data.Modelo}
                    </Typography>
                  </td>
                  <td className="p-3">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {data.Precio}
                    </Typography>
                  </td>
                  <td className="p-3">
                    <Typography as="a" href="#" variant="small" color="gray" className="font-medium text-right">
                      <IoCreateOutline />
                    </Typography>
                  </td>
                </tr>
              )
            })}
        </tbody>
        <tfoot>
          <tr>
            <td className="border-t border-gray-100 bg-gray-100 text-right p-3" colSpan="2">
              <Typography variant="small" color="blue-gray" className="font-normal">
                Comisiones:
              </Typography>
            </td>
            <td className="border-t border-gray-100 bg-gray-100 p-3" colSpan="2">
              <Typography variant="small" color="blue-gray" className="font-normal">
                $0,00 MXN
              </Typography>
            </td>
          </tr>
        </tfoot>
      </table>
    </Card>
  )
}