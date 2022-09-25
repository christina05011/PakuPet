import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";


export const Cart = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart, setCart] = value.cart;
    const [total] = value.total;


    const togglefalse = () => {
        setMenu(false);
    }

    const show01 = menu ? "carts show" : "carts";
    const show02 = menu ? "cart show" : "cart";

    const rest = id => {
        cart.forEach(item => {
            if(item.id === id){
                item.amount === 1 ? item.amount = 1 : item.amount -= 1;
            }
            setCart([...cart])
        })
    }

    const sum = id => {
        cart.forEach(item => {
            if(item.id === id){
                item.amount += 1;
            }
            setCart([...cart])
        })
    }

    const removeProduct = id => {
        if(window.confirm("¿Quieres eliminar el producto?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    item.amount = 1;
                    cart.splice(index, 1);
                }
            })
            setCart([...cart])
        }
    }

    return (
        <div className={show01}>
            <div className={show02}>
                <div className="cart_close" onClick={togglefalse}>
                    <box-icon name="x"></box-icon>
                </div>

                <h2>Su carrito</h2>

                <div className="cart_center">
                {
                    cart.length === 0 ? 
                    <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito vacio</h2> :
                    <>
                    {
                        cart.map((product) => (
                            <div className="cart_item" key={product.id}>
                                <img src={product.image} alt="" />
                                <div>
                                    <h3>{product.title}</h3>
                                    <p className="price">S/. {product.price}</p>
                                </div>
                                <div>
                                    <box-icon name="up-arrow" type="solid" onClick={() => sum(product.id)}></box-icon>
                                    <p className="amount">{product.amount}</p>
                                    <box-icon name="down-arrow" type="solid" onClick={() => rest(product.id)}></box-icon>
                                </div>
                                <div className="remove_item" onClick={() => removeProduct(product.id)}>
                                    <box-icon name="trash"></box-icon>
                                </div>
                            </div>
                        ))
                    }
                    </>
                }
                </div>
                
                <div className="cart_footer">
                    <h3>Total: S/. {total}</h3>
                    <button className="btn">Payment</button>
                </div>
            </div>
        </div>
    )
}