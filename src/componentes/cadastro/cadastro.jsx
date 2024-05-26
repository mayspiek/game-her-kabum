// Importações necessárias
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Cadastro() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [nick, setNick] = useState("");
    const [gender, setGender] = useState(false);
    const [role, setRole] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            return;
        }

        console.log({ email, password });
    };

    const handleSelectGender = (gender) => {
        setGender(gender);
        console.log(gender);
    };
    const handleRole = (role) => {
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
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nick"
                    required
                    className="input"
                    value={nome}
                    onChange={(e) => setNick(e.target.value)}
                />
                <div className="checkBox-conainer">
                    <div>
                        <label htmlFor="feminino">Femino</label>
                        <input
                            checked={gender === "feminino"}
                            onChange={() => handleSelectGender("feminino")}
                            type="checkbox"
                            name="feminino"
                            id="feminino"
                        />
                    </div>
                    <div>
                        <label htmlFor="masculino">Masculino</label>
                        <input
                            checked={gender === "masculino"}
                            onChange={() => handleSelectGender("masculino")}
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
                            onChange={() => handleRole("ROLE_ORGANIZADOR")}
                            type="checkbox"
                            name="organizador"
                            id="organizador"
                        />
                    </div>
                    <div>
                        <label htmlFor="masculino">Usuario</label>
                        <input
                            checked={role === "ROLE_USUARIO"}
                            onChange={() => handleRole("ROLE_USUARIO")}
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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    required
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirme a Senha"
                    required
                    className="input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit" className="button">
                    Cadastrar
                </button>
                <Link to="/login">
                    <button className="btn-voltar">Voltar</button>
                </Link>
            </form>
        </div>
    );
}

export default Cadastro;
