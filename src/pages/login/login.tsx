
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import './login.styles.css';
import { UserLogin } from "../../models/User";
import { AuthContext } from "../../context/Auth";
import LoginBg from '../../assets/img/login-bg-logo.png';
import LoginCompl from '../../assets/img/logo-compl.png'
import { Button } from "../../components/button/Button";
import { Navigate } from "react-router-dom";

export function LoginPage() {
    const authContext = useContext(AuthContext);
    const { Login, isLogged } = authContext || {};

    const [loginData, setLoginData] = useState<UserLogin>({
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prevLoginData => ({
            ...prevLoginData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Login) {
            Login(loginData);
            alert('Logado com sucesso!');
        }
    };

    if (isLogged) {
        alert('Usuário já logado');
        return (
            <div></div>
        );
    }
    return (
        <div className="container">
            <div className="imageBg">
                <img src={LoginBg} alt="" />
            </div>
            <div className="loginForms">
                <div className="logoComp">
                    <img src={LoginCompl} alt="" />
                </div>

                <div className="text">
                    <h2>Realize seu Login</h2>
                    <p>Preencha os campos abaixo com os seus dados para acessar sua conta</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form--label" htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="form--label" htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button type="submit">Entrar</Button>
                </form>
            </div>
        </div>
    );
}


