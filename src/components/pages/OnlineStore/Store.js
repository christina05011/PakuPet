import React from "react";
import { Products } from "./Products";
import { Header } from "./Header";
import './Store.css';
import 'boxicons'
import { DataProvider } from "../../../context/DataProvider";

export const OnlineStore = () => {
    return (
        <DataProvider>
            <div className="store">
                <Header />
                <Products />
            </div>
        </DataProvider>
    )
}