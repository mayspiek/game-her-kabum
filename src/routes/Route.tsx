import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/cadastro'
import { LoginPage } from '../pages/login/login'
import { About } from '../pages/about/About'
import { Teste } from '../pages/eventCreate/eventCreate'
import { Home } from '../pages/home/home'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/registro" Component={Cadastro} />
                <Route path="/create" Component={Teste} />
                <Route path="/" Component={About} />
                <Route path="/home" Component={Home} />
            </Routes>

        </BrowserRouter>
    )
}
