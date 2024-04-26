import './App.css';
import React from 'react';
import Navbar from './Navbar'; 
import Foooter from './Foooter';
import MeuBotao from './botao';
import Parceria from './Parcerias'; 
import Loja from './Loja';
import Servico from './Serviços';
import Sobre from './Sobre';
import LoginForm from './loginn';
import { ReactComponent as ImageBanner } from './ImageBanner.svg';
import { ReactComponent as Profile } from './profile.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cadastro from './cadastre';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>} /> 
          <Route path='/Cadastre-se' element={<Cadastro/>} /> 
          <Route path='/Loja' element={<Loja/>} /> 
          <Route path='/Sobre' element={<Sobre/>} /> 
          <Route path='/Serviços' element={<Servico/>} /> 
          <Route path='/Parceria' element={<Parceria/>} /> 
          <Route path='/Sobre' element={<Sobre/>} /> 
        </Routes>
      </BrowserRouter>



      <Navbar />
      <Profile div className='profile'/>
      <ImageBanner />
      <MeuBotao  />
      <Foooter />
    </div>
  );
}

export default App;
