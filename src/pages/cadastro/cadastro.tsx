// Importações necessárias
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./cadastro.styles.css";
import { Gender, Role, User } from "../../models/User";
import { UserLoginService } from "../../api/services/UserLoginService";
import { UserLoginRepository } from "../../api/repositories/UserLoginRepository";
import { AxiosHttpClient } from "../../api/AxiosHttpClient";
import { UserRegisterService } from "../../api/services/UserRegisterService";
import { UserRegisterRepository } from "../../api/repositories/UserRegisterRepository";
import { Button } from "../../components/button/Button";


function Cadastro() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [nick, setNick] = useState("");
    const [gender, setGender] = useState<Gender>();
    const [role, setRole] = useState<Role>();
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
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <input
                    type="text"
                    placeholder="Nome"
                    required
                    className="input"
                    value={nick}
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    placeholder="Nick"
                    required
                    className="input"
                    value={nome}
                    onChange={handleChanges}
                />
                <div className="checkBox-conainer">
                    <div>
                        <label htmlFor="feminino">Femino</label>
                        <input
                            checked={gender === "feminino"}
                            onChange={() => handleSelectGender(Gender.FEMININO)}
                            type="checkbox"
                            name="feminino"
                            id="feminino"
                        />
                    </div>
                    <div>
                        <label htmlFor="masculino">Masculino</label>
                        <input
                            checked={gender === "masculino"}
                            onChange={() => handleSelectGender(Gender.MASCULINO)}
                            type="checkbox"
                            name="masculino"
                            id="masculino"
                        />
                    </div>
                </div>

                <div className="checkBox-conainer">
                    <div>
                        <label htmlFor="feminino">Organizador</label>
                        <input
                            checked={role === "ROLE_ORGANIZADOR"}
                            onChange={() => handleRole(Role.ROLE_ORGANIZADOR)}
                            type="checkbox"
                            name="organizador"
                            id="organizador"
                        />
                    </div>
                    <div>
                        <label htmlFor="masculino">Usuario</label>
                        <input
                            checked={role === "ROLE_USER"}
                            onChange={() => handleRole(Role.ROLE_USER)}
                            type="checkbox"
                            name="usuario"
                            id="usuario"
                        />
                    </div>
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    required
                    className="input"
                    value={email}
                    onChange={handleChanges}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    required
                    className="input"
                    value={password}
                    onChange={handleChanges}
                />
                <input
                    type="password"
                    placeholder="Confirme a Senha"
                    required
                    className="input"
                    value={confirmPassword}
                    onChange={handleChanges}
                />
                <Button href={'/registro'}>
                    Cadastrar
                </Button>
                
                <Link to="/login">
                    <button className="btn-voltar">Voltar</button>
                </Link>
            </form>
        </div>
    );
}

export default Cadastro;
