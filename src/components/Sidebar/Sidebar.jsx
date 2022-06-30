import React from "react";
import styles from "./styles.module.css";
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = ({showSidebar}) => {
    return (
        <div className={styles.container}>
            <HiMenu onClick={showSidebar} />
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/login">LOGIN</Link>
            </nav>
        </div>
    )
};

export default Sidebar;