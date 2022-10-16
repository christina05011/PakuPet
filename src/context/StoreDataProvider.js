import React, { useState, useEffect, createContext } from 'react';
import { StoreData } from '../Data.js';

export const DataContext = createContext();

export const StoreDataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const product = StoreData.items;
        if(product){
            setProducts(product)
        }
        else{
            setProducts([])
        }
        setProducts(product)
    }, [])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = products.filter(product => {
                return product.id === id;
            })
            setCart([...cart, ...data])
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart){
            setCart(dataCart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        const getTotal = () => {
            const result = cart.reduce((prev, item) => {
                return prev + (item.price * item.amount);
            }, 0)
            setTotal(result);
        }
        getTotal()
    }, [cart])

    const value = {
        products: [products],
        menu: [menu, setMenu],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}