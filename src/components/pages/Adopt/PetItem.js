import React from 'react';

export const PetItem = ({
    name,
    age,
    image,
}) => {

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
            </div>
            <div className="button">
                <button className="btn1">
                    Adoptar
                </button>
            </div>
        </div>
    )
}