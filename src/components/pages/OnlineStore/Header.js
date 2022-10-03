import React, { useContext } from "react";
import { DataContext } from "../../../context/StoreDataProvider";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart;

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <header>
            <div className="container">
                <p className="logo">P'aku Pet</p>
                <div className="_cart" onClick={toggleMenu}>
                    <box-icon name="cart"></box-icon>
                    <span className="item_total">{cart.length}</span>
                </div>
            </div>
        </header>
    )
}