import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";


function ResetPage() {

  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/AdminPage");
  }, [user, loading]);

  return (
    <main className="page_wrapper">
      <div className="card card_login">
        <form>
          <label for="user-email">Correo Electronico</label>
          <input name="user-email" type="email" className="reset__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
          <button type="submit" className="reset__btn" onClick={() => sendPasswordReset(email)} >Solicitar nueva contraseña</button>
        </form>
      </div>
    </main>
  );
}

export default ResetPage;