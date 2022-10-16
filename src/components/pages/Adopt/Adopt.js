import React from "react";

import { Header } from "./Header";
import { Pets } from "./Pets";
import { AdoptDataProvider } from "../../../context/AdoptDataProvider";
import './Adopt.css';
import { Message } from "./Message";

export const Adopt = () => {
    return (
        <AdoptDataProvider>
            <div className="adopt">
                <Header />
                <Message />
                <Pets />
            </div>
        </AdoptDataProvider>
    )
}