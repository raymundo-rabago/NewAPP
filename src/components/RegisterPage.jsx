import React, { useEffect, useState } from "react";

import { Header } from './Header';
import { CreateForm } from './CreateForm';
import { Footer } from './Footer';

export default function RegisterPage() {

    return (
        <div className="pageWrapper">
            <Header />
            <CreateForm />
            <Footer />
        </div>
    );

};
