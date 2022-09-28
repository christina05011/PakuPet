import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';

export const ProductItem = ({
    id,
    title,
    price,
    image,
    category,
}) => {

    const value = useContext(DataContext);
    const addCart = value.addCart;

    return (
        <div className="producto">
            <a href="#">
                <div className="producto_img">
                    <img src={image} alt={title}  height={500}/>
                </div>
            </a>
            <div className="producto_footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">S/. {price}</p>
            </div>
            <div className="button">
                <button className="btn1" onClick={() => addCart(id)}>
                    Añadir al carrito
                </button>
                <button className="btn2">
                    Vista
                </button>
                {/* <div>
                    <a href="#" className="btn">Vista</a>
                </div> */}
            </div>
        </div>
    )
}