import React, { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, //Return the current state of the user.
    signOut
} from 'firebase/auth';
import { auth }from '../firebase';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider');
    return context;
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    //Runs as soon as the component is loaded
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, [])

    return (
        <authContext.Provider value={{ signup, login, logout, user, loading }}>
            {children}
        </authContext.Provider>
    );
}