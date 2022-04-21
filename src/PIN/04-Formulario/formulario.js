import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from "../Components/Form/form";
import Globos from "../public/img/globos.png";
import './formulario.scss';



function Formulario(props){
    const [Data, setData] = useState ({name:'', email:'', phone:'', message:''})
    
    const disable = !Data.name.length && !Data.email.length && !Data.phone.length && !Data.message.length
    
    function handleChangeName (event){
        const newData = {...Data}
        newData.name = event.target.value
        setData(newData)
    }

    function handleChangeEmail (event){
        setData({...Data, email: event.target.value})
    }

    
    function handleChangePhone (event){
        setData({...Data, phone: event.target.value})
    }

    function handleChangeMessage (event){
        setData({...Data, message: event.target.value})
    }
    
    function confirmacionEnvio(){
        <div class="alert alert-success" role="alert">
            This is a success alert—check it out!
        </div>
    }
    
    function handleSend(event){
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/api/guardar-formulario",Data).then(response=>{
            console.log(response)
            confirmacionEnvio()
            setData({name:'', email:'', phone:'', message:''})
            alert(response.data.status)

        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="container_5" id="secc_5">   
            <img className="img_5" src={Globos} alt="Globos herostaticos"/>    
            <div className="container_form">    
                <h2 className="titulo_5">Get in touch<p class="titulo_abajo_otro_color">We are hiring!</p></h2>   
                <Form disable={disable} Data={Data} handleSend={handleSend} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} handleChangeEmail={handleChangeEmail} handleChangeMessage={handleChangeMessage}/>
            </div>  
        </div>
    )
}

export default Formulario;
