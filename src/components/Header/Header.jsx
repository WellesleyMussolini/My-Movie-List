import React from "react";
import InputSearch from "../../components/Input-search/Input-search";

const Header = ({ inputSearch, handleTextField }) => {
    return (
        <>
            <InputSearch
                handleOnChange={event => handleTextField(event.target.value)} 
                textField={inputSearch}
            />
        </>
    )
};

export default Header;