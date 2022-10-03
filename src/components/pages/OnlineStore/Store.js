import React from "react";
import { Products } from "./Products";
import { Header } from "./Header";
import { Cart } from './Cart';
import './Store.css';
import 'boxicons'
import { StoreDataProvider } from "../../../context/StoreDataProvider";

export const OnlineStore = () => {
    return (
        <StoreDataProvider>
            <div className="store">
                <Header />
                <Cart />
                <Products />
            </div>
        </StoreDataProvider>
    )
}