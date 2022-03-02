import React from 'react';
import './Galeria.css'
import Pizza2 from './../Imagenes/Pizza2.jpg'
import Pizza3 from './../Imagenes/Pizza3.jpg'
import Pizza5 from './../Imagenes/Pizza5.jpg'
import Pizza8 from './../Imagenes/Pizza8.jpg'

const Galeria2 = () => {
    return (

        <>
            <div className="container centrar   py-3">
                <div className="row my-4 centrar">
                    <div className="col-lg-3 col-12 col-sm-6 centrar">
                        <div className="card cardcita my-1">
                            < img src={Pizza5} alt="" className=" cardcitaImagen"></img>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6 centrar">
                        <div className="card cardcita my-1">
                            < img src={Pizza2} alt="" className="cardcitaImagen"></img>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6 centrar">
                        <div className="card cardcita my-1">
                            < img src={Pizza3} alt="" className="cardcitaImagen"></img>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6 centrar">
                        <div className="card cardcita my-1">
                            < img src={Pizza8} alt="" className="cardcitaImagen colores"></img>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

const Galeria = () => {
    return ( 
        <>
        <div className="container py-3">
            <div className="row my-4">
                <div className="col-lg-3 col-12 col-sm-6">
                    <div className="card cardcita my-1">
                        < img src={Pizza5} alt="" className=" cardcitaImagen"></img>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6">
                    <div className="card my-1">
                        < img src={Pizza2} alt="" className="cardcitaImagen"></img>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6">
                    <div className="card my-1">
                        < img src={Pizza3} alt="" className="cardcitaImagen"></img>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-sm-6 centrar">
                    <div className="card my-1">
                        < img src={Pizza8} alt="" className="cardcitaImagen colores"></img>
                    </div>
                </div>
            </div>


        </div>
    </>
     );
}

export default Galeria;