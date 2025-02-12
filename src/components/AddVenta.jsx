import React from 'react';
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const AddVenta = () => {
  return (
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">Modelo</Typography>
          <Input id="modelo" size="sm" className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
    </form>  
  )
}

export default AddVenta;