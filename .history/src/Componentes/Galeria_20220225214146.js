import React from 'react';
import './Galeria.css'
import {ReactComponent as Imagen1} from './../Imagenes/carousel1.jpg'
import {ReactComponent as Menu} from './../Imagenes/Menu.svg'
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
 <img src="./../Imagenes/carousel2.jpg" className="" alt=""></img>
 
 
 <div className="card-body">
 <p className="card-text">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, doloribus.</p>
 </div>
 <div className="card-footer">Footer Dany</div>
 </div>
 

 </div>

        </div>
        </>
     );
}
 
export default Galeria;