import React, { useContext } from "react";
import { DataContext } from "../../../context/AdoptDataProvider";
import { PetItem } from "./PetItem";

export const Pets = () => {

    const value = useContext(DataContext);
    const [pets] = value.pets;

    return (
        <>
            <h1 className="pets_title">Mascotas</h1>
            <div className="pets">
                {
                    pets.map(pet => (
                        <PetItem 
                            key={pet.id} 
                            id={pet.id}
                            name={pet.name}
                            age={pet.age}
                            image={pet.image}
                            contact={pet.contact}
                        />
                    ))
                }
            </div>
        </>
    )
}