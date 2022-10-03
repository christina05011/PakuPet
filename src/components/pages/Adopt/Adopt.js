import React from "react";

import { Header } from "./Header";
import { Pets } from "./Pets";
import { AdoptDataProvider } from "../../../context/AdoptDataProvider";
import './Adopt.css';

export const Adopt = () => {
    return (
        <AdoptDataProvider>
            <div className="adopt">
                <Header />
                <Pets />
            </div>
        </AdoptDataProvider>
    )
}