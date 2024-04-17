
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, logInWithEmailAndPassword } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";

import { TextInput } from '@tremor/react';
import { Button } from '@tremor/react';

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
        <Card color="transparent" shadow={false}>
            <div class="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <img src='/assets/imgs' class='w-32 h-32' />
            </div>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" className="-mb-3">Usuario</Typography>
                    <TextInput placeholder="ejemplo@correo.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Typography variant="h6" className="-mb-3">Contraseña</Typography>
                    <TextInput placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div class="text-right mt-2">
                      <a href="#" class="text-sm font-semibold text-zinc-500 hover:text-yellow-700 focus:text-yellow-700">Olvidaste la contraseña?</a>
                    </div>
                    <Button type="submit" variant="primary"  onClick={() => logInWithEmailAndPassword(email, password)} >Entrar</Button>
            </form>
        </Card>
    )
};