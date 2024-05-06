import React from "react";
import "../CSS/Loja.css"
import { ReactComponent as Banner } from '../assets/banner_loja.svg';

function Loja (){
    return(
        <body>
        <h1 className="Nome">Loja Eco</h1>
        <hr className="linha"></hr>
        <Banner className='banner' />
        </body>
    )
}

export default Loja;