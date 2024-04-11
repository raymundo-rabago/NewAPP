
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, logInWithEmailAndPassword } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { Paper, TextInput, PasswordInput, Button, Title } from '@mantine/core';

import classes from './AuthPage.module.css';

export function AuthPage() {

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
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Soluxe App
                </Title>
                <TextInput label="Correo Electrónico" placeholder="ejemplo@correo.com" size="md" value={email} onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput label="Password" placeholder="Contraseña" mt="md" size="md" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button fullWidth mt="xl" size="md" onClick={() => signInWithEmailAndPassword(email, password)}>Entrar</Button>
            </Paper>
        </div>
    )
};