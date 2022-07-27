import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const UseAuthProvider = ({ children }) => {
    const [searchField, setSearchField] = useState("");
    return (
        <AuthContext.Provider value={{ searchField, setSearchField }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    const { searchField, setSearchField } = context;
    return { searchField, setSearchField };
}