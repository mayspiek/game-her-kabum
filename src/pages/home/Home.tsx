import { Navigate } from "react-router-dom"
import { Button } from "../../components/button/Button"
import { GamesTitle } from "../../components/gamesTitle/GamesTitle"
import NavBar from "../../components/navbar/NavBar"
import './home.styles.css'
import { boasVindas, experienciaPersonalizada, principaisEventos } from "../../data"

export const PossuiConta = () => {
    return (
        <div className="possuiConta flexCenter">
            <p>Já possui conta?</p>
            <a href="">Faça o login</a>
        </div>
    )
}
export const Home = () => {

    return (
        <>
            <NavBar />
            <div className="homeContent">
                <div className="boasVindas">
                    <h2>Bem-vinda ao Game.her!</h2>
                    <p>{boasVindas}</p>
                </div>

                <div className="eventos">
                    <h2>Os principais eventos do mundo do game</h2>
                    <p>{principaisEventos}</p>
                </div>

                <GamesTitle />

                <div className="experienciaPersonalizada">
                    <h2>Tenha acesso a uma experiência personalizada</h2>
                    <p>{experienciaPersonalizada}</p>

                    <div className="registroOuLogin">
                        <Button href={''}>
                            Realize seu cadastro na plataforma!
                        </Button>

                        <PossuiConta />
                    </div>
                </div>
            </div>
        </>
    )
}
