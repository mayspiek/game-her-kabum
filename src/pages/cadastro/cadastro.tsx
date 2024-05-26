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
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [nick, setNick] = useState("");
    const [gender, setGender] = useState<Gender>(Gender.FEMININO);
    const [role, setRole] = useState<Role>(Role.ROLE_USER);
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

        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        try{
            const useService = new UserRegisterService(new UserRegisterRepository(new AxiosHttpClient));

            useService.register(user);
        } catch (error) {
            console.log(error);
        }

        console.log({ email, password });
    };

    const handleChanges = (event : FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSelectGender = (gender : Gender) => {
        setGender(gender);
        console.log(gender);
    };
    const handleRole = (role : Role) => {
        setRole(role);
        console.log(role);
    };


    return ( 
        <div>
            <NavBar/>
         <div className= "container">
            <img src={backgroundImage} className="background"/>
              <form className="form" onSubmit={handleSubmit}>
                <img src={nomeLogo} alt="Logo" className="logo" />


               <div className="container_titulo">
                <h2 className="Titulo">Realize o seu cadastro</h2>
                <p>Preencha os campos abaixo com os seus dados para criar sua conta</p>
                </div>
                
                <div className="input-container">
                    <label htmlFor="role">Como você deseja acessar a plataforma?</label>
                    <div className="role-options">
            

                            <button className={ role === Role.ROLE_USER ? "btn-check" : "btn-button"}onClick={()=>handleRole(Role.ROLE_USER)}>Gamer</button>
            
                       
                            
                            <button className={ role === Role.ROLE_ORGANIZADOR ? "btn-check" : "btn-button"} onClick={()=>handleRole(Role.ROLE_ORGANIZADOR)}>Organizador</button>
                       
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="genero">Qual o seu gênero?</label>
                    <div className="gender-options">
              
                            
                    <button className={ gender === Gender.FEMININO ? "btn-check" : "btn-button"}onClick={()=>handleSelectGender(Gender.FEMININO)}>Feminino</button>
                
                            
                    <button className={ gender === Gender.MASCULINO ? "btn-check" : "btn-button"}onClick={()=>handleSelectGender(Gender.MASCULINO)}>Masculino</button>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        required
                        className="input"
                        value={nome}
                        onChange={handleChanges}
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
                        value={nick}
                        onChange={handleChanges}
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
                        value={email}
                        onChange={handleChanges}
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
                        value={password}
                        onChange={handleChanges}
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
                        onChange={handleChanges}
                        name="confirmPassword"
                    />
                </div>
                <button type="submit" className="submit">
  Cadastrar
</button>
            </form>
        </div>
        </div>
    );
}

export default Cadastro;