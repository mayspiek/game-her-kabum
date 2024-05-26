import './NavBar.styles.css';

const gameTitle = [
    'LOL',
    'Valorant',
    'FreeFire',
    'CS',
    'Fortnite'
]


export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logoContainer">

            </div>

            <div className="navigation">
                <ul className="ulNavigation">
                    <li>
                        <a href="inicio">Início</a>
                    </li>
                    <li>
                        <a href="sobre">Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
