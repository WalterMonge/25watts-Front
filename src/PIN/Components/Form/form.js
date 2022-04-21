import React from "react";
import './form.scss';


function Form(props){

    return(
        <form>
            <div className="form-floating">
                <input value={props.Data.name} onChange={props.handleChangeName} type="text" className="form-control input" id="name" placeholder="Nombre"/>
                <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating">
                <input value={props.Data.email} onChange={props.handleChangeEmail} type="email" className="form-control input" id="email" placeholder="Email"/>
                <label for="floatingPassword">Email</label>
            </div>
            <div className="form-floating">
                <input value={props.Data.phone} onChange={props.handleChangePhone} type="number" className="form-control input" id="telefono" placeholder="Phone"/>
                <label for="floatingPassword">Phone</label>
            </div>
            <div className="form-floating">
                <textarea value={props.Data.message} onChange={props.handleChangeMessage} className="form-control input" id="floatingTextarea2" placeholder="Message" style={{height: "100px"}}></textarea>
                <label for="floatingTextarea2">Message</label>
              </div>
            <button disabled={props.disable} onClick={props.handleSend} className="boton_2" type="submit">Send</button>
        </form>
    )
}

export default Form;