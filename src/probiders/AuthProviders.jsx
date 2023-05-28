/* eslint-disable no-unused-vars */
import React, { Children, createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = (children) => {
    const authInfo = {

    }
    return (
        <AuthContext.Provider valu = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;