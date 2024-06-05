
// https://github.com/vensi9/crud-operation-with-react.js-axios/blob/main/src/components/Read.js#L4
import React, { useState } from 'react';
import { Card, Button, Typography, Input, ButtonGroup } from "@material-tailwind/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const VentasTabla = ({ data, columns }) => {

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    initialState: {
      sortBy: [
        {
          id: 'Fecha',
          desc: false
        }
      ]
    }
  });

  return (
    <div className='m-auto sm:container'>
      <div className='w-full sm:w-72 mb-5'>
        <Input type="text" variant="outlined" label="Busqueda" size="md" color="gray" className='md:max-w-sm' value={filtering} onChange={(e) => setFiltering(e.target.value)} />
      </div>
      <Card className="h-full w-full rounded mb-5">
        <table className="table-auto text-left border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()} className="border-b border-blue-gray-100 bg-blue-gray-50 p-3">
                    {header.isPlaceholder ? null : (
                      <Typography variant="small" color="black" className="font-normal leading-none text-xs flex justify-between items-center">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: <IoIosArrowUp className='opacity-40' />, desc: <IoIosArrowDown className='opacity-40' /> }[ header.column.getIsSorted() ?? null ]
                        }
                      </Typography>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="even:bg-blue-gray-50/50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3">
                    <Typography variant="small" color="gray" className="font-normal text-xs">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Typography>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="flex w-full gap-4 justify-end">
        <ButtonGroup variant="outlined" size="sm" color="gray" className="opacity-75">
          <Button className="flex items-center gap-3" onClick={() => table.previousPage()}><IoIosArrowBack /> Anterior</Button>
          <Button className="flex items-center gap-3" onClick={() => table.nextPage()}>Siguiente <IoIosArrowForward /></Button>
        </ButtonGroup>
      </div>
    </div>
  )
}