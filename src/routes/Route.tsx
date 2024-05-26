import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from '../componentes/cadastro/cadastro'
import Login from '../componentes/login'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Cadastro} />
                <Route path="/" Component={Login} />
            </Routes>
            
        </BrowserRouter>
    )
}
