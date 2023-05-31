/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../probiders/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    } 
    if(user){
        return children
    }
    return ( <Navigate to="/login" replace></Navigate>
        );
};

export default PrivateRoute;