import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Head, HamburguerIcon, Content } from "./wrapper.styles";

const Wrapper = ({ search, handleSearch, showInputSearch, children }) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <>
            <Head>
                <HamburguerIcon onClick={() => setOpenSidebar(true)} />
                <Sidebar
                    openSidebar={openSidebar}
                    handleClose={() => setOpenSidebar(false)}
                />
                {
                    showInputSearch &&
                    <Header inputSearch={search} handleTextField={handleSearch} />
                }
            </Head>
            <Content>
                {children}
            </Content>
        </>
    )
};

export default Wrapper;