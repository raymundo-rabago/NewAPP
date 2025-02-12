import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";

import { Header } from './Header';
// import { VentasList } from './VentasList';
import { Ventas } from './AddVenta';
import { Footer } from './Footer';

export default function AdminPage() {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    // fetchUserName();
  }, [user, loading]);

  return (
    <div className="pageWrapper">
      <Header />
      <Ventas />
      <Footer />
    </div>
  );

};
