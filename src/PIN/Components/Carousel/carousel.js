import React from "react";
import Paisaje from "../../public/img/Paisaje.png";
import AutoCarrusel from "../../public/img/AutoCarrusel.png";
import GlobosCarrusel from "../../public/img/GlobosCarrusel.png";

function Carousel(props){

    return(
        <div className= "container_carousel"  id="carousel">
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators container_botones">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="boton_carousel active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="boton_carousel" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="boton_carousel" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="Fondo_Paisaje" src={Paisaje} alt="Fondo Paisaje"/>
                        <article className="container_art_1">
                            <h1 className="titulo_1">Sed ut perspiciatis unde omnis iste natus</h1>
                            <section className="parrafo_1">
                                <p>Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque.</p> 
                            </section> 
                            <button className="boton_1">Read more</button>                            
                        </article>
                    </div>
                    <div className="carousel-item">
                        <img className="Fondo_Paisaje" src={GlobosCarrusel} alt="Fondo Globo"/>
                        <article className="container_art_1">
                            <h1 className="titulo_1">Sed ut perspiciatis unde omnis iste natus</h1>
                            <section className="parrafo_1">
                                <p>Otro asaid Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque.</p> 
                            </section> 
                            <button className="boton_1">Read more</button>                            
                        </article>    
                    </div>
                    <div class="carousel-item">
                        <img className="Fondo_Paisaje" src={AutoCarrusel} alt="Fondo Auto"/> 
                        <article className="container_art_1">
                            <h1 className="titulo_1">Sed ut perspiciatis unde omnis iste natus</h1>
                            <section className="parrafo_1">
                                <p>Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque.</p> 
                            </section> 
                            <button className="boton_1">Read more</button>                            
                        </article>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;