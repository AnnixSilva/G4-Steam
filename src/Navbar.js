import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Ecolife } from './Ecolife.svg';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-custom-color"> 
      <div className="container-fluid">
        <a classNamme="navbar-brand" href="#"/>
        <Ecolife div className='eco'/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="Loja">Loja</a>       
            <a className="nav-link" href="/Serviços">Serviços</a>
            <a className="nav-link" href="/Parceria">Parceiria</a>
            <a className="nav-link" href="/Sobre">Sobre-nós</a>
            <a className="CAD" href="/Cadastre-se">Cadastre-se</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
