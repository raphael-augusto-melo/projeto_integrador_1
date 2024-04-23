import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './screens/Login/Login';
import Cadastro from './screens/Cadastro/Cadastro';
import TelaInicial from './screens/TelaInicial/TelaInicial';
import TelaPix from './screens/TelaPix/TelaPix';
import TelaPagamentos from './screens/TelaPagamentos/TelaPagamentos';
import TelaExtrato from './screens/TelaExtrato/TelaExtrato';
import TelaEmprstimo1 from './screens/TelaEmprstimo1/TelaEmprstimo1';
import TelaEmprstimo2 from './screens/TelaEmprstimo2/TelaEmprstimo2';
import TelaFatura from './screens/TelaFatura/TelaFatura';
import TelaPagamentos_bol from './screens/TelaPagamentos_boleto/TelaPagamentos_bol';

const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path='/Cadastro' element={<Cadastro/>}/>
            <Route exact path='/TelaInicial' element={<TelaInicial/>}/>
            <Route exact path='/TelaPix' element={<TelaPix/>}/>
            <Route exact path='/TelaPagamentos' element={<TelaPagamentos/>}/>
            <Route exact path='/TelaExtrato' element={<TelaExtrato/>}/>
            <Route exact path='/TelaEmprstimo1' element={<TelaEmprstimo1/>}/>
            <Route exact path='/TelaEmprstimo2' element={<TelaEmprstimo2/>}/>
            <Route exact path='/TelaFatura' element={<TelaFatura/>}/>
            <Route exact path='/TelaPagamentos_bol' element={<TelaPagamentos_bol/>}/>
          </Routes>
      </Router>
    );
  }

export default App;