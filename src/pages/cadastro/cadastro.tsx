// Importações necessárias
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./cadastro.styles.css";
import { Gender, Role, User } from "../../models/User";
import { AxiosHttpClient } from "../../api/AxiosHttpClient";
import { UserRegisterService } from "../../api/services/UserRegisterService";
import { UserRegisterRepository } from "../../api/repositories/UserRegisterRepository";
import backgroundImage from '../../assets/img/cadastro_tela.png';
import nomeLogo from '../../assets/img/logo-compl.png';
import NavBar from "../../components/navbar/NavBar";

function Cadastro() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        password: "",
        gender: Gender.FEMININO,
        email: "",
        role: Role.ROLE_USER // valor padrão
    });

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (user.password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        try {
            const useService = new UserRegisterService(new UserRegisterRepository(new AxiosHttpClient()));

            useService.register(user);
        } catch (error) {
            console.log(error);
        }

        console.log(user);
    };

    const handleChange = (event : FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSelectGender = (gender : Gender) => {
        setUser((prevUser) => ({
            ...prevUser,
            gender: gender
        }));
    };

    const handleRole = (role : Role) => {
        setUser((prevUser) => ({
            ...prevUser,
            role: role
        }));
    };

    return ( 
        <div>
            <NavBar/>
            <div className="container">
                <img src={backgroundImage} className="background" />
                <form className="form" onSubmit={handleSubmit}>
                    <img src={nomeLogo} alt="Logo" className="logo" />

                    <div className="container_titulo">
                        <h2 className="Titulo">Realize o seu cadastro</h2>
                        <p>Preencha os campos abaixo com os seus dados para criar sua conta</p>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="role">Como você deseja acessar a plataforma?</label>
                        <div className="role-options">
                            <button type="button" className={ user.role === Role.ROLE_USER ? "btn-check" : "btn-button"} onClick={() => handleRole(Role.ROLE_USER)}>Gamer</button>
                            <button type="button" className={ user.role === Role.ROLE_ORGANIZADOR ? "btn-check" : "btn-button"} onClick={() => handleRole(Role.ROLE_ORGANIZADOR)}>Organizador</button>
                        </div>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="genero">Qual o seu gênero?</label>
                        <div className="gender-options">
                            <button type="button" className={ user.gender === Gender.FEMININO ? "btn-check" : "btn-button"} onClick={() => handleSelectGender(Gender.FEMININO)}>Feminino</button>
                            <button type="button" className={ user.gender === Gender.MASCULINO ? "btn-check" : "btn-button"} onClick={() => handleSelectGender(Gender.MASCULINO)}>Masculino</button>
                        </div>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            required
                            className="input"
                            value={user.name as string} // Change the type of user.name from String to string
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="nick">Username</label>
                        <input
                            type="text"
                            placeholder="Nick"
                            required
                            className="input"
                            value={user.username as string} // Change the type of user.username from String to string
                            onChange={handleChange}
                            name="username"
                        />
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="input"
                            value={user.email as string} // Change the type of user.email from String to string
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            placeholder="Senha"
                            required
                            className="input"
                            value={user.password as string} // Change the type of user.password from String to string
                            onChange={handleChange}
                            name="password"
                        />
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="confirmarSenha">Confirme a Senha</label>
                        <input
                            type="password"
                            placeholder="Confirme a Senha"
                            required
                            className="input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                            name="confirmPassword"
                        />
                    </div>
                    
                    <button type="submit" className="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
