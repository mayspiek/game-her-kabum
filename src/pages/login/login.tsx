
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import './style.css';
import { Navigate } from "react-router-dom";
import { UserLogin } from "../../models/User";
import { AuthContext } from "../../context/Auth";
import LoginBg from '../../assets/img/login-bg.png';

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
            <Navigate to='/home' />
        }
        
    };


    return (
        <div className="container">
            <img src={LoginBg} alt="" />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


