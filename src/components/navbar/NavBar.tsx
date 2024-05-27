import './NavBar.styles.css';
import LogoPequenaW from '../../assets/img/logo-pequena-w.png'
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Button } from '../button/Button';

export default function NavBar() {
    const authContext = useContext(AuthContext);
    const { isLogged, Logout } = authContext || {};

    return (
        <div className="navBar">
            <div className="logoContainer">
                <img src={LogoPequenaW} alt="" />
            </div>

            <div className="navigation">
                <ul className="ulNavigation">

                    <li>
                        <a className="nav--item" href="/">Início</a>
                    </li>
                    <li>
                        <a className="nav--item" href="/eventos">Eventos</a>
                    </li>
                    <li>
                        <a className="nav--item" href="/sobre">Sobre</a>
                    </li>
                    {isLogged ? <>
                        <li>
                            <a className="nav--item" href="/perfil">Perfil</a>
                        </li>
                        <li>
                            <a className="nav--item" href="/cadastrar-evento">Cadastrar Evento</a>
                        </li>
                        <Button onClick={Logout}>
                            Logout
                        </Button>
                    </>
                        : true}
                </ul>
            </div>
        </div >
    )
}
