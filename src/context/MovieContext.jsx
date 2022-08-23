import React, { useState, createContext, useContext } from "react";

const MovieContext = createContext();

export const UseMovieProvider = ({ children }) => {
    const [favoritedMovies, setFavoritedMovies] = useState([]);
    return (
        <MovieContext.Provider value={{ favoritedMovies, setFavoritedMovies }}>
            {children}
        </MovieContext.Provider>
    )
};

export const UseMovieContext = () => {
    const context = useContext(MovieContext);
    const { favoritedMovies, setFavoritedMovies } = context;
    return { favoritedMovies, setFavoritedMovies };
}