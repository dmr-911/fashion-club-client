import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useAccount from '../hooks/useAccount';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // const value = useAccount();
    const value = useFirebase();
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;