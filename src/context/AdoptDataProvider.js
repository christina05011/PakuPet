import React, { useState, useEffect, createContext } from 'react';
import { AdoptData } from '../Data.js';

export const DataContext = createContext();

export const AdoptDataProvider = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const pet = AdoptData.items;
        if(pet){
            setPets(pet)
        }
        else{
            setPets([])
        }
        setPets(pet)
    }, [])

    const value = {
        pets : [pets]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}