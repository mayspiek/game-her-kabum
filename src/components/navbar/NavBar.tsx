import './NavBar.styles.css';
import LogoPequenaW from '../../assets/img/logo-pequena-w.png'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logoContainer">
                <img src={LogoPequenaW} alt="" />
            </div>

            <div className="navigation">
                <ul className="ulNavigation">
                    <li>
                        <a className="nav--item" href="/home">Início</a>
                    </li>
                    <li>
                        <a className="nav--item" href="/eventos">Eventos</a>
                    </li>
                    <li>
                        <a className="nav--item" href="/perfil">Perfil</a>
                    </li>
                    <li>
                        <a className="nav--item" href="/cadastrar-evento">Cadastrar Evento</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
