import React from 'react';
import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({children}) {
    const {user, loading} = useAuth()

    if (loading) return <h1>Loading</h1>

    //Check if the user exists, if not it is directed to sign up.
    if (!user) return <Navigate to='/sign-up' />

    return <>{children}</>
}