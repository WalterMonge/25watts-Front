import React from "react";
import './secc_3.scss';

function Secc3(props){

    return(
        <div className="fondo_dos_colores" id="secc_3">
            <div className="container_img_2">                 
                <div id="carouselExampleControls" className="carousel slide container_fondo_naranja" data-bs-ride="carousel">
                    <div className="carousel-inner container_art_3">
                        <div className="carousel-item active">
                            <article>                
                                <p className="parrafo_titulo">Sed ut perspiciatis</p>               
                                <h2 className="titulo_3">Nemo Enim</h2>               
                                <p className="parrafo_3">Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptatem accusantium doloremque laudantiumbr,               
                                totam rem aperiam.</p>                             
                            </article>
                        </div>
                        <div className="carousel-item">
                            <article>                
                                <p className="parrafo_titulo">Otro Sed ut perspiciatis</p>               
                                <h2 className="titulo_3">Nemo Enim</h2>               
                                <p className="parrafo_3">Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptatem accusantium doloremque laudantiumbr,               
                                totam rem aperiam.</p>                      
                            </article>
                        </div>
                    </div>
                    <button className="carousel-control-prev boton_previous" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next boton_next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>              
        </div>
    )
}

export default Secc3;