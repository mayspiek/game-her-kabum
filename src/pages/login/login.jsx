
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Login() {

    

    return (
        <div className="container">
            <form className="form">
                <h2>Login</h2>
            <input type="email" placeholder="Email" required className="input" />
                <input type="password" placeholder="Senha" required className="input" />
                <button className="btn">Button</button>
                <p>Não tem uma conta?<Link to ="/register">Cadastre-se</Link></p>
            </form>
        </div>
    );
}

export default Login;

