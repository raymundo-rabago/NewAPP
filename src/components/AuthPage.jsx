
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { FiLogIn } from "react-icons/fi";

export default function AuthPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
        useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/admin");
    }, [user, loading]);

    return (
        <main className="page_wrapper">
            <div className="card card_login">
                <img width="88px" height="auto" src='/assets/imgs' alt="Soluxe SUnglasses Logo" class='logo' />
                <form>
                    <label for="email">Usuario</label>
                    <input name="email" placeholder="ejemplo@correo.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="password">Contraseña</label>
                    <input name="password" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={() => logInWithEmailAndPassword(email, password)}>Entrar <FiLogIn /></button>
                    <Link to="/reset" >¿Olvidaste la Contraseña?</Link>
                </form>
            </div>
        </main>
    )
};