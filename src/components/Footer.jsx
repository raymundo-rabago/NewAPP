import React from 'react';
import { Typography } from "@material-tailwind/react";
const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 border-top">
      <Typography color="gray" variant="small" className="text-right font-normal">Soluxe Sunglasses Boutique &copy; | {currentYear}</Typography>
    </footer>
  )
}
