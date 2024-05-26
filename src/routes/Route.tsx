import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../pages/cadastro/cadastro'
import { LoginPage } from '../pages/login/login'
import { About } from '../pages/about/About'
import { Event } from '../pages/Event/Event'
import { CadastroEvento } from '../pages/cadastro-evento/CadastroEvento'
import { Perfil } from '../pages/perfil/perfil'
import { MVP2 } from '../pages/mvp2/MVP2'


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/registro" Component={Cadastro} />
                <Route path="/eventos" Component={Event} />
                <Route path='/perfil' Component={Perfil} />
                <Route path="/cadastrar-evento" Component={CadastroEvento} />
                <Route path='/eventos/fifa' Component={MVP2} />
                <Route path="/" Component={About} />
            </Routes>

        </BrowserRouter>
    )
}
