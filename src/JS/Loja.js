import React from "react";
import "../CSS/Loja.css"
import { ReactComponent as Banner } from '../assets/banner_loja.svg';
import { ReactComponent as Baner } from '../assets/banner2.svg';
import { ReactComponent as Baner3 } from '../assets/banner3.svg';

function Loja (){
    return(
        <body>
        <h1 className="Nome">Loja Eco</h1>
        <Banner className='banner' />
        <Baner className='baner' />
        <Baner3 className='baner3' />
        <ul className="preco">
            <p>R&#36;15,99</p>
            <p>R&#36;12,50</p>
            <p>R&#36;28,30</p>
            <p>R&#36;5,89</p>
            <div className="texto">
            <h4>Talheres de madeira</h4>
            <h4>Copo ecológico com tampa</h4>
            <h4>Kit ecológico de madeira</h4>
            <h4>Canudo de papel</h4>
        </div>    
        </ul>
       

        </body>
    )
}

export default Loja;