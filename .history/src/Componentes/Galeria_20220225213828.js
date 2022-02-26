import React from 'react';
import './Galeria.css'
import {ReactComponent as Imagen1} from './../Imagenes/carousel1.jpg'
const Galeria = () => {
    return ( 

        <>
        <div className="container">
    <div className="row">
        <div className="col-lg-4">
            <div className="card">
                 <img src="./../Imagenes/Carousel1.jpg" class="card-img-top" alt=""></img>
            </div>
        </div>
    </div>
        <div class="col-4 mx-5 my-5">
 <div className="card">
 <div className="card-header">Dany Bechara</div>
 <img src="./../Imagenes/carousel1.jpg" className="card-img-top" alt=""></img>
 
 
 <div className="card-body">
 <p className="card-text">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, doloribus.</p>
 </div>
 <div className="card-footer">Footer Dany</div>
 </div>
 
 <Imagen1></Imagen1>
 </div>

        </div>
        </>
     );
}
 
export default Galeria;