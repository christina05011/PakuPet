import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProductItem } from "./ProductItem";

export const Products = () => {

    const value = useContext(DataContext); //Contains the value of the products
    const [products] = value.products;

    //console.log(products);

    return (
        <>
            <h1 className="title">Productos</h1>
            <div className="productos">
                {
                    products.map(product => (
                        <ProductItem 
                            key={product.id} 
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            cantidad={product.cantidad}
                        />
                    ))
                }
            </div>
        </>
    )
}