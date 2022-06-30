import React from "react";
import styles from "./styles.module.css";
// import { Container, Wrapper } from "./login.styles.jsx";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.container}>
            <h1>LOGIN</h1>
            <form>
                <p>Email</p>
                <input type="email" placeholder="email..." />
                <p>Password</p>
                <input type="password" placeholder="password..." />
                <button type="submit">LOGIN</button>
            </form>
            <div className={styles.register}>
                <p style={{ color: "rgb(73, 73, 73)" }}>
                    Você ainda não tem uma conta ?
                </p>
                <button>SIGN UP</button>
            </div>
        </div>
    )
};

export default Login;