import React from "react";
import Logo1 from "../public/img/logo1.png";
import './footer.scss';

function Footer(props){

    return(
        <footer>
            <sub className="copy">2020 © All rights reserved.</sub>
            <img className="logo_2" src={Logo1} alt="Logo de la marca"/>               
        </footer>
    )
}

export default Footer;