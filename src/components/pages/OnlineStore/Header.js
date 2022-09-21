import React from "react";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <p className="logo">P'aku Pet</p>
                <div className="cart">
                    <box-icon name="cart"></box-icon>
                    <span className="item_total">0</span>
                </div>
            </div>
            
            
        </header>
    )
}