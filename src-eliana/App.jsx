import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./componentes/cadastro/cadastro";
import Login from "./componentes/login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Cadastro} />
                <Route path="/" Component={Login} />
            </Routes>
        </Router>
    );
}

export default App;
