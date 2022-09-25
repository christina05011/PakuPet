import React from "react";
import { Products } from "./Products";
import { Header } from "./Header";
import { Cart } from './Cart';
import './Store.css';
import 'boxicons'
import { DataProvider } from "../../../context/DataProvider";

export const OnlineStore = () => {
    return (
        <DataProvider>
            <div className="store">
                <Header />
                <Cart />
                <Products />
            </div>
        </DataProvider>
    )
}