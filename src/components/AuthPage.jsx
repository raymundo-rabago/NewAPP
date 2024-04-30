
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from 'sonner';
import { Card, CardBody, Input, Checkbox, Button, Typography } from "@material-tailwind/react";

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
                    <figure className="flex justify-center my-4">
                        <img src="/soluxe-logo.svg" className="h-20 object-contain object-center mb-3" />
                    </figure>
                    <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="flex flex-col gap-6 h-auto">
                            <Input type="email" variant="outlined" size="lg" label="Correo Electrónico" placeholder="correo@ejemplo.com" color="gray" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="password" variant="outlined" size="lg" label="Contraseña" placeholder="********" color="gray" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <Button fullWidth ripple={true} variant="filled" size="lg" className="mt-8 flex items-center text-center justify-center gap-2" onClick={() => logInWithEmailAndPassword(email, password)} >
                            Entrar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" /></svg>
                        </Button>
                        <Typography variant="small" color="gray" className="mt-4 text-sm text-center font-normal text-gray-400 justify-center">Soluxe Sunglasses Boutique &copy; | {currentYear}</Typography>
                    </form>
                </CardBody>
            </Card>
            <Toaster position="bottom-right" />
        </section>
    )
};
