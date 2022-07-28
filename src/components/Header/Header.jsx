import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, HamburguerIcon } from "./header.styles";
import InputSearch from "../../components/Input-search/Input-search";

const Header = ({inputSearch, setInputSearch}) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <Container>
            <HamburguerIcon onClick={() => setOpenSidebar(true)} />
            <Sidebar
                openSidebar={openSidebar}
                handleClose={() => setOpenSidebar(false)}
            />
            <InputSearch handleOnChange={event => setInputSearch(event.target.value)} textField={inputSearch} />
        </Container>
    )
};

export default Header;