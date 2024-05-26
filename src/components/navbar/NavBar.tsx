import './NavBar.styles.css';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logoContainer">

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
