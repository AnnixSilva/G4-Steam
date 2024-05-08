import React from "react";
import '../CSS/sobre.css';
import { ReactComponent as EcoGreen } from '../assets/foterEco.svg';
import { ReactComponent as Lixo } from '../assets/lixo.svg';
import { ReactComponent as Lixo2 } from '../assets/Lixo2.svg';

function Sobre (){
    return(
        <body>
            <div className='Sobre'>
                <h1>Sobre Nós</h1>
            </div>
            <div className='Sob'>
                <hr className="linhaSOBRE"></hr>
                <p>A EcoLife é uma empresa criada por estudantes da rede de ensino SESI/BA.  Tendo como objetivo promover mudanças no uso de plástico no cotidiano da população residente em Salvador/BA. Para isso nosso site vende produtos biodegradáveis e ecológicos além de contar com petições ao governo que promovam mudanças aos hábitos das empresas.</p>
            </div>
            <Lixo className='lixo' /> 
            <Lixo2 className='lixo2' /> 
            <EcoGreen className='EcoGreen' /> 
        </body>
    )
}

export default Sobre;
