import './FormularioAgregarMenu.css'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
let hola;

const FormularioAgregarMenu = () => {
    const [platos2,cambiarplatos2]=useState([{}])
    const [precio,cambiarPrecio]=useState();
    return ( 
        <>
        <div className="container">
     
        <form action="" className='my-5'>
        <div className="row">
        <div className="col-6">
        <label htmlFor='plato' className="form-label">New plate</label>
            <input type="text" className='form-control' name="plato" id="plato" aria-describedby='ayuda-plato' />
            <div id="ayuda-plato" className="form-text">
            Please, insert the new plate.
            </div>
            </div>
            <div className="col-6">
            <label htmlFor='categorias' className="form-label">Category</label>
            <input type="text" className='form-control' name="categorias" id="categorias" aria-describedby='ayuda-categorias' />
            <div id="ayuda-plato" className="form-text">
            Please, insert the categoria.
            </div>
            </div>
            <div className="col-6">
            <label htmlFor='precio' className="form-label">Price</label>
            <input value={precio} type="text" className='form-control' name="precio" id="precio" aria-describedby='ayuda-number'
             onChange={(e)=>{

            }}/>
            <div id="ayuda-number" className="form-text">
            Please, insert the price.
            </div>
            </div>
        </div>
            
            </form>
        </div>
        
        </>
         );
        
}
 
export {FormularioAgregarMenu}