import React from 'react';
import {Link} from 'react-router-dom'

function Menu(){
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cadastrar">Cadastrar</Link></li>
                <li><Link to="/consultar">Consultar</Link></li>
                <li><Link to="/liberar">Liberar</Link></li>
            </ul>
        </div>
    )
}

export default Menu