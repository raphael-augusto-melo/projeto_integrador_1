import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './screens/Login/Login';
import Cadastro from './screens/Cadastro/Cadastro';
import TelaInicial from './screens/TelaInicial/TelaInicial';
import TelaPagamentos from './screens/TelaPagamentos/TelaPagamentos';
import TelaExtrato from './screens/TelaExtrato/TelaExtrato';
import TelaEmprstimo1 from './screens/TelaEmprstimo1/TelaEmprstimo1';
import TelaEmprstimo2 from './screens/TelaEmprstimo2/TelaEmprstimo2';
import TelaFatura from './screens/TelaFatura/TelaFatura';
import TelaPagamentos_bol from './screens/TelaPagamentos_boleto/TelaPagamentos_bol';
import TelaPagamentos_bol2 from './screens/TelaPagamentos_boleto2/TelaPagamentos_bol2';
import TelaPagamentos_bol3 from './screens/TelaPagamentos_boleto3/TelaPagamentos_bol3';
import TelaEmprstimo3  from './screens/TelaEmprstimo3/TelaEmprstimo3';
import TelaEmprstimo4 from './screens/TelaEmprstimo4/TelaEmprstimo4';
import TelaPix from './screens/TelaPix/TelaPix';
import TelaPix2 from './screens/TelaPix2/TelaPix2';
import TelaPix3 from './screens/TelaPix3/TelaPix3';
import TelaPix4 from './screens/TelaPix4/TelaPix4';
import TelaPix5 from './screens/TelaPix5/TelaPix5';
import TelaPix6 from './screens/TelaPix6/TelaPix6';
import TelaPix7 from './screens/TelaPix7/TelaPix7';
import TelaEsqSenha from './screens/TelaEsqSenha/EsqSenha';
import TelaEsqSenha2 from './screens/TelaEsqSenha2/EsqSenha';
import TelaEsqSenha3 from './screens/TelaEsqSenha3/EsqSenha';


const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path='/Cadastro' element={<Cadastro/>}/>
            <Route exact path='/TelaInicial' element={<TelaInicial/>}/>
            <Route exact path='/TelaPix' element={<TelaPix/>}/>
            <Route exact path='/TelaPix2'element={<TelaPix2/>}/>
            <Route exact path='/TelaPix3'element={<TelaPix3/>}/>
            <Route exact path='/TelaPix4'element={<TelaPix4/>}/>
            <Route exact path='/TelaPix5'element={<TelaPix5/>}/>
            <Route exact path='/TelaPix6'element={<TelaPix6/>}/>
            <Route exact path='/TelaPix7'element={<TelaPix7/>}/>
            <Route exact path='/TelaPagamentos' element={<TelaPagamentos/>}/>
            <Route exact path='/TelaExtrato' element={<TelaExtrato/>}/>
            <Route exact path='/TelaEmprstimo1' element={<TelaEmprstimo1/>}/>
            <Route exact path='/TelaEmprstimo2' element={<TelaEmprstimo2/>}/>
            <Route exact path='/TelaFatura' element={<TelaFatura/>}/>
            <Route exact path='/TelaPagamentos_bol' element={<TelaPagamentos_bol/>}/>
            <Route exact path='/TelaPagamentos_bol2' element={<TelaPagamentos_bol2/>}/>
            <Route exact path='/TelaPagamentos_bol3' element={<TelaPagamentos_bol3/>}/>
            <Route exact path='/TelaEmprstimo3' element={<TelaEmprstimo3/>}/>
            <Route exact path='/TelaEmprstimo4' element={<TelaEmprstimo4/>}/>
            <Route exact path='/TelaEsqSenha' element={<TelaEsqSenha/>}/>
            <Route exact path='/TelaEsqSenha2' element={<TelaEsqSenha2/>}/>
            <Route exact path='/TelaEsqSenha3' element={<TelaEsqSenha3/>}/>
          </Routes>
      </Router>
    );
  }

export default App;