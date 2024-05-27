// Importações necessárias
import { FormEvent, useState } from "react";
import "./cadastro.styles.css";
import { Gender, Role, User } from "../../models/User";
import { AxiosHttpClient } from "../../api/AxiosHttpClient";
import { UserRegisterService } from "../../api/services/UserRegisterService";
import { UserRegisterRepository } from "../../api/repositories/UserRegisterRepository";
import backgroundImage from '../../assets/img/cadastro_tela.png';
import nomeLogo from '../../assets/img/logo-compl.png';
import NavBar from "../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        password: "",
        gender: Gender.FEMININO,
        email: "",
        role: Role.ROLE_USER // valor padrão
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            const useService = new UserRegisterService(new UserRegisterRepository(new AxiosHttpClient()));
            const response = await useService.register(user);

            if (response.statusCode === 200) {
                alert("Usuário cadastrado com sucesso!");
                event.currentTarget.reset();
                navigate('/');
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleChanges = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSelectGender = (gender: Gender) => {
        setUser({...user, gender});
        console.log(gender);
    };
    const handleRole = (role: Role) => {
        setUser({...user, role});
        console.log(role);
    };


    return (
        <div>
            <NavBar />
            <div className="cadastro-container">
                <div className="cadastro-background">
                    <img src={backgroundImage} alt="" className="background" />
                </div>
                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <img src={nomeLogo} alt="Logo" className="cadastro-logo" />


                    <div className="container_titulo">
                        <h2 className="Titulo">Realize o seu cadastro</h2>
                        <p>Preencha os campos abaixo com os seus dados para criar sua conta</p>
                    </div>

                    <div className="input-container">
                        <label htmlFor="role">Como você deseja acessar a plataforma?</label>
                        <div className="role-options">


                            <button className={user.role === Role.ROLE_USER ? "btn-check" : "btn-button"} onClick={() => handleRole(Role.ROLE_USER)}>Gamer</button>



                            <button className={user.role === Role.ROLE_ORGANIZADOR ? "btn-check" : "btn-button"} onClick={() => handleRole(Role.ROLE_ORGANIZADOR)}>Organizador</button>

                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="genero">Qual o seu gênero?</label>
                        <div className="gender-options">


                            <button className={user.gender === Gender.FEMININO ? "btn-check" : "btn-button"} onClick={() => handleSelectGender(Gender.FEMININO)}>FEMININO</button>


                            <button className={user.gender === Gender.MASCULINO ? "btn-check" : "btn-button"} onClick={() => handleSelectGender(Gender.MASCULINO)}>MASCULINO</button>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            required
                            className="input"
                            value={user.name as string} // Fix: Change 'String' to 'string'
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="nick">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            className="input"
                            value={user.username as string} // Fix: Change 'String' to 'string'
                            onChange={handleInputChange}
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
                            value={user.email as string} // Fix: Change 'String' to 'string'
                            onChange={handleInputChange}
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
                            value={user.password as string} // Fix: Change 'String' to 'string'
                            onChange={handleInputChange}
                            name="password"
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