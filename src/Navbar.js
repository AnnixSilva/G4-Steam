import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-custom-color"> 
      <div class="container-fluid">
        <a class="navbar-brand" href="#">aaaaaaaaaaaa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">Serviços</a>
            <a class="nav-link" aria-disabled="true">Loja</a>
            <a class="nav-link" aria-disabled="true">Parceria</a>
            <a class="nav-link" aria-disabled="true">Conatate-Nós</a>
            <a class="nav-link" aria-disabled="true">Sobre-Nós</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
