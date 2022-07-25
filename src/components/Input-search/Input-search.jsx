import React from "react";
import InputAdornment from '@mui/material/InputAdornment';
import { InputText, SearchIconStyled } from "./input-search-styled.jsx";

const InputSearch = ({ handleOnChange, textField }) => {
    return (
        <>
            <InputText type="search" placeholder="search..."
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIconStyled />
                        </InputAdornment>
                    ),
                }}
                onChange={handleOnChange}
                value={textField} />
        </>
    )
};

export default InputSearch;