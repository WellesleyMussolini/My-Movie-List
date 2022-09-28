import React, { useState, createContext, useContext } from "react";

const MovieContext = createContext();

export const UseMovieProvider = ({ children }) => {
    const [favoritedMovies, setFavoritedMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    return (
        <MovieContext.Provider value={{
            favoritedMovies, setFavoritedMovies,
            searchField, setSearchField,
        }}>
            {children}
        </MovieContext.Provider>
    )
};

export const UseMovieContext = () => {
    const context = useContext(MovieContext);
    const { favoritedMovies, setFavoritedMovies, searchField, setSearchField } = context;
    return { favoritedMovies, setFavoritedMovies, searchField, setSearchField };
}