
import React, { useState} from 'react';
// import Axios from 'axios';

function Listing() {

  const authToken = import.meta.env.VITE_SECRET_KEY;
  const notionDbID = import.meta.env.VITE_DATABASE_ID;

  return (
    <div className="Listing">
      <table>Data Table</table>
    </div>
  );
}

export default Listing;