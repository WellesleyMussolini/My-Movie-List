import React, { useState } from "react";
import styles from "./styles.module.css";
import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    console.log(showSidebar)
    return (
        <header className={styles.container}>
            <div className={styles.icons}>
                <HiMenu onClick={() => setShowSidebar(!showSidebar)} />
            </div>
            {
                showSidebar
                &&
                <Sidebar showSidebar={() => setShowSidebar(!showSidebar)} />
            }
        </header>
    )
};

export default Header;