import React from 'react';
import './Galeria.css'
import  Imagen1 from './../Imagenes/carousel1.jpg'
import {ReactComponent as Menu} from './../Imagenes/Menu.svg'
const Galeria = () => {
    return ( 

        <>
        <div className="container  py-5">
    <div className="row my-4 ">
        <div className="col-lg-4">
            <div className="card cardcita">
           < img src={Imagen1} alt="" className="card-img-top cardcitaImagen"></img>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card cardcita">
           < img src={Imagen1} alt="" className="card-img-top cardcitaImagen"></img>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card cardcita">
           < img src={Imagen1} alt="" className="card-img-top cardcitaImagen"></img>
            </div>
        </div>
    </div>
        

        </div>
        </>
     );
}
 
export default Galeria;