import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, logout } from "../firebase";

import { Listing } from './Listing';

export default function AdminPage() {

  const ApiUrl = 'https://api.notion.com/v1/databases/{database_id}/query';

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    // fetchUserName();
  }, [user, loading]);

  return (
    <div className="container">
        <h1>Admin Page</h1>
        <Listing />
        <button className="button" onClick={logout}>Logout</button>
    </div>
  );

};
