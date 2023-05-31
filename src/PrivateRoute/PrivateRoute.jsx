/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../probiders/AuthProviders';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    } 
    if(user){
        return children
    }
    return ( <Navigate to="/login" state={{from: location}} replace></Navigate>
        );
};

export default PrivateRoute;