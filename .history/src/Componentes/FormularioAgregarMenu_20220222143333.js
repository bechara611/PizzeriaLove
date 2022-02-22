import './FormularioAgregarMenu.css'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
let hola;

const FormularioAgregarMenu = () => {
    const [platos2,cambiarplatos2]=useState([{}])
    
    return ( 
        <>
        <div className="container">
        <div className="row my-5">
        <div className="col">
        <form action="">
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
        </div>
            
            </form>
        </div>
        </div>
        </div>
        </>
         );
        
}
 
export {FormularioAgregarMenu}