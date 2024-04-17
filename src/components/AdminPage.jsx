import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, logout } from "../firebase";

import { Listing } from './Listing';

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
        <aside>
          
        </aside>
        <main>
          <header>
            <a onClick={logout}><span>Salir</span></a>
            <h1>Admin Page</h1>
          </header>
          <section>
          </section>
          
          <Listing />
          
          <footer className="flex w-full flex-row flex-wrap items-center justify-end gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-right md:justify-between">
            <Typography color="yellow-600" className="font-normal">&copy; 2024 Material Tailwind</Typography>
          </footer>
        </main>

        
    </div>
  );

};
