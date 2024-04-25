import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Flex, Layout, Space } from 'antd';

import { auth, logout } from "../firebase";

import { Listing } from './Listing';

const { Header, Footer, Content } = Layout;

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
      <Header>
        <h1>Listado de Ventas</h1>
      </Header>
      <Content>
        <Listing />
      </Content>
      <Footer />
    </div>
  );

};
