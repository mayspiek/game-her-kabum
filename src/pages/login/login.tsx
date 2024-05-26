
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import './login.styles.css';
import { Navigate, useNavigate } from "react-router-dom";
import { UserLogin } from "../../models/User";
import { AuthContext } from "../../context/Auth";
import LoginBg from '../../assets/img/login-bg-logo.png';
import LoginCompl from '../../assets/img/logo-compl.png'
import { Button } from "../../components/button/Button";

export function LoginPage() {
    const authContext = useContext(AuthContext);
    const { Login, isLogged } = authContext || {};
    const navigate = useNavigate(); // Obtenha a função de navegação

    const [loginData, setLoginData] = useState<UserLogin>({
        email: '',
        password: ''
    });

    const [redirected, setRedirected] = useState(false); // Estado para controlar o redirecionamento

    useEffect(() => {
        if (isLogged && !redirected) {
            navigate('/home');
            setRedirected(true);
        }
    }, [isLogged, redirected, navigate]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prevLoginData => ({
            ...prevLoginData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        if (loginData && Login) {
            try{
                const response = await Login(loginData); 
                if (response === 'Email ou senha inválidos' ) { 
                    alert('Erro ao logar usuário');
                }

            } catch (error) {
                console.error(error);
            }
        }
    };

    if (isLogged) {
        alert('Usuário logado');
        return <Navigate to="/" />;
    }
    return (
        <div className="login-container">
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


