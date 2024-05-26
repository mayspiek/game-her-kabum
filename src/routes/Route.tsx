import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/cadastro'
import { LoginPage } from '../pages/login/login'
import { About } from '../pages/about/About'
import { Event } from '../pages/Event/Event'
import { CadastroEvento } from '../pages/cadastro-evento/CadastroEvento'


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/registro" Component={Cadastro} />
                <Route path="/eventos" Component={Event} />
                <Route path="/cadastrar-evento" Component={CadastroEvento} />
                <Route path="/" Component={About} />
            </Routes>

        </BrowserRouter>
    )
}
