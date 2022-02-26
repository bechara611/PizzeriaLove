import React from 'react';
import './Galeria.css'
import  Imagen1 from './../Imagenes/carousel1.jpg'
import {ReactComponent as Menu} from './../Imagenes/Menu.svg'
const Galeria = () => {
    return ( 

        <>
        <div className="container">
    <div className="row my-1">
        <div className="col-lg-4">
            <div className="card">
           < img src={Imagen1} alt=""></img>
            </div>
        </div>
    </div>
        

        </div>
        </>
     );
}
 
export default Galeria;