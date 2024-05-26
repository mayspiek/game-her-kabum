import './NavBar.styles.css';
import Logo from '../../assets/img/logo-pequena-w.png';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logoContainer">
            <img src={Logo} className='Logopequena'/>
            </div>

            <div className="navigation">
                <ul className="ulNavigation">
                   
                    <li>
                        <a className="nav--item" href="#inicio">Início</a>
                    </li>
                    <li>
                        <a className="nav--item" href="#sobre">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
