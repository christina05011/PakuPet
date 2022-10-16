import React, { useContext } from 'react';
import { DataContext } from '../../../context/AdoptDataProvider';

export const PetItem = ({
    name,
    age,
    image,
    contact,
}) => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;

    const tooglemenu = () => {
        setMenu(!menu);
    }

    return (
        <div className="pet">
            <a href="#">
                <div className="pet_img">
                    <img src={image} alt={name}  height={500}/>
                </div>
            </a>
            <div className="pet_footer">
                <h1>{name}</h1>
                <p className="age">{age} años</p>
                <p className="contact">{contact}</p>
            </div>
            <div className="button" onClick={tooglemenu}>
                <button className="btn1">
                    Adoptar
                </button>
            </div>
        </div>
    )
}