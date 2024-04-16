
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, logInWithEmailAndPassword } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import classes from './AuthPage.module.css';

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
        <div className={classes.wrapper}>
            <form className={classes.form} radius={0} p={30}>
                <legend className={classes.title}>Soluxe App</legend>
                <input type="email" label="Correo Electrónico" placeholder="ejemplo@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" label="Password" placeholder="Contraseña" mt="md" size="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={() => logInWithEmailAndPassword(email, password)}>Entrar</button>
            </form>
        </div>
    )
};