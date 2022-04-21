import React, {useState, useEffect} from "react";
import Header from "./01_Header/header";
import Main from "./02_Main/main";
import Aside from "./03_Aside/aside";
import Formulario from "./04-Formulario/formulario";
import Footer from "./05-Footer/footer";
import "./index.scss";

function ContainerPin(props){

    return(
        <div className="index">
           <Header/>
           <Main/>
           <Aside/>
           <Formulario/>
           <Footer/>
        </div>
    )
}

export default ContainerPin;