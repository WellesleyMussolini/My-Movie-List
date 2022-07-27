import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, HamburguerIcon } from "./header.styles";
import InputSearch from "../../components/Input-search/Input-search";

const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [searchField, setSearchField] = useState("");
    return (
        <Container>
            <HamburguerIcon onClick={() => setOpenSidebar(true)} />
            <Sidebar
                openSidebar={openSidebar}
                handleClose={() => setOpenSidebar(false)}
            />
            <InputSearch handleOnChange={event => setSearchField(event.target.value)} textField={searchField} />
        </Container>
    )
};

export default Header;