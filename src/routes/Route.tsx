import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/cadastro'
import { LoginPage } from '../pages/login/login'
import { About } from '../pages/about/About'
import { Event } from '../pages/Event/Event'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/registro" Component={Cadastro} />
                <Route path="/eventos" Component={Event} />
                <Route path="/" Component={About} />
            </Routes>

        </BrowserRouter>
    )
}
