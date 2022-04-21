import React from "react";
import Secc2 from "../Components/Secc_2/secc_2";
import Secc3 from "../Components/Secc_3/secc_3";
import './main.scss';

function Main(props){

    return(
        <main className="Main-Container">
            <Secc2/>
            <Secc3/>                                 
        </main>
    )
}

export default Main;