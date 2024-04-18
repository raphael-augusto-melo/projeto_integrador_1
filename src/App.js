import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './screens/Login/Login';
import Cadastro from './screens/Cadastro/Cadastro';
import TelaInicial from './screens/TelaInicial/TelaInicial';

const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path='/Cadastro' element={<Cadastro/>}/>
            <Route exact path='/TelaInicial' element={<TelaInicial/>}/>
          </Routes>
      </Router>
    );
  }

export default App;