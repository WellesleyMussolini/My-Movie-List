import React from "react";
import { Wrapper, ListWrapper, ListItems, H1 } from "./filtered-movies.styles.jsx";

const FilteredMovies = ({ inputSearch, movies }) => {
    const filtering = !inputSearch ? movies : movies.filter(e => e.product.props.movieName.toLowerCase().includes(inputSearch.toLowerCase()));
    return (
        <>
            {
                filtering.length === 0
                    ?
                    <Wrapper><H1>Ops... Nenhum resultado foi encontrado...</H1></Wrapper>
                    :
                    <ListWrapper>
                        {
                            filtering.map((movie, index) => {
                                return <ListItems key={index}>{movie.product}</ListItems>
                            })
                        }
                    </ListWrapper>
            }
        </>
    )
};

export default FilteredMovies;