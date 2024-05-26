import { Button } from "../../components/button/Button"
import { GamesTitle } from "../../components/gamesTitle/GamesTitle"
import NavBar from "../../components/navbar/NavBar"
import './About.styles.css'
import { boasVindas, experienciaPersonalizada, principaisEventos } from "../../data"
import { Link } from "react-router-dom"

export const PossuiConta = ( { href }: { href: string } ) => {
    return (
        <div className="possuiConta flexCenter">
            <p>Já possui conta?</p>
            <Link to={href}>Faça o login</Link>
        </div>
    )
}
export const About = () => {

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
                        <Button href='/registro'>
                            Realize seu cadastro na plataforma!
                        </Button>

                        <PossuiConta href={'/login'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
