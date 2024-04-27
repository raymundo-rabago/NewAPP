
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Card, CardBody, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { KeyIcon } from "@heroicons/react/24/outline";

const currentYear = new Date().getFullYear();

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
        <section className="bg-gray-100 flex h-screen justify-center items-center p-8">
            <Card className="mt-6 w-100" color="white" shadow={true}>
                <CardBody>
                    <figure className="flex justify-center mt-6">
                        <img src="/soluxe-logo.svg" className="h-20 w-10 object-contain object-center" />
                    </figure>
                    <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="flex flex-col gap-3">
                            <Typography variant="h6" color="gray" className="mt-3">Correo Electronico</Typography>
                            <Input size="md" placeholder="correo@ejemplo.com" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Typography variant="h6" color="gray" className="mt-3">Contraseña</Typography>
                            <Input type="password" size="lg" placeholder="********" className="!border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button fullWidth ripple={true} variant="filled" size="lg" className="mt-8 flex items-center text-center justify-center gap-4" onClick={() => logInWithEmailAndPassword(email, password)} >
                            Entrar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>
                        </Button>
                        <Typography color="gray" className="mt-4 text-sm text-center font-normal text-gray-400 justify-center">Soluxe Sunglasses Boutique &copy; | {currentYear}</Typography>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
};