import React from 'react';
const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="p-4 bg-gray-300 border-top">
      <Typography color="gray" className="mt-4 text-sm text-right font-normal text-gray-400 justify-center">Soluxe Sunglasses Boutique &copy; | {currentYear}</Typography>
    </footer>
  )
}
