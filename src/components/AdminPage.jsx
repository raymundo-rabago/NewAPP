import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, logout } from "../firebase";

import { Logout } from './Logout';
import { Listing } from './Listing';
import { Footer } from './Footer';

export default function AdminPage() {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    // fetchUserName();
  }, [user, loading]);

  return (
    <div className="pageWrapper">
      <header>
        <Logout />
        <h1>Listado de Ventas</h1>
      </header>
      <main>
        <Listing />
      </main>
      <Footer />
    </div>
  );

};
