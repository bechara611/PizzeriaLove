import React from 'react';
import './Galeria.css'
import  Pizza1 from './../Imagenes/Pizza1.jpg'
import  Pizza2 from './../Imagenes/Pizza2.jpg'
import  Pizza3 from './../Imagenes/Pizza3.jpg'
import  Pizza4 from './../Imagenes/Pizza4.jpg'
import  Pizza5 from './../Imagenes/Pizza5.jpg'
import  Pizza6 from './../Imagenes/Pizza6.jpg'
import  Pizza7 from './../Imagenes/Pizza7.jpg'

import {ReactComponent as Menu} from './../Imagenes/Menu.svg'
const Galeria = () => {
    return ( 

        <>
        <div className="container   py-5">
    <div className="row my-4 ">
        <div className="col-lg-4">
            <div className="card cardcita">
           < img src={Pizza5} alt="" className="card-img-top cardcitaImagen"></img>
            </div> 
        </div>
        <div className="col-lg-4">
            <div className="card cardcita">
           < img src={Pizza2} alt="" className="card-img-top cardcitaImagen"></img>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card cardcita">
           < img src={Pizza1} alt="" className="card-img-top cardcitaImagen"></img>
            </div>
        </div>
    </div>
        

        </div>
        </>
     );
}
 
export default Galeria;