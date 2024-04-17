import React from "react";
import { Navbar, Collapse, Typography, IconButton, } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
export function NavbarSimple() {
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-start text-blue-gray-900">
        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} >
            <XMarkIcon className="h-6 w-6 hidden" strokeWidth={2} />
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        </IconButton>
        <Typography as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5" >Admin App</Typography>
      </div>
    </Navbar>
  );
}