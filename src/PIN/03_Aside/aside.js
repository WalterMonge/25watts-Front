import React from "react";
import Acordeon from "../Components/Acordeon/acordeon";
import Ruta from '../public/img/ruta.png';
import './aside.scss';

function Aside(props){

    return(
        <div className="container_4" id="secc_4">
            <img className="img_4" src={Ruta} alt="Hombre coriendo por la Calle"/>
            <aside>
                <Acordeon/>
            </aside>
        </div>
                  
    )
}

export default Aside;