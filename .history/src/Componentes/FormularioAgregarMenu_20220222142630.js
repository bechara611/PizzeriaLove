import './FormularioAgregarMenu.css'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
let hola;

const FormularioAgregarMenu = () => {
    const [platos2,cambiarplatos2]=useState([{}])
    
    return ( 
        <>
        <div className="container">
        <div className="row">
        <div className="col">
        <form action="">
            <label for="correo"class="form-label">New plate</label>
            <input type="text" className='form-control' name="plato" id="plato" aria-describedby='ayuda-plato' />
            <div id="ayuda-plato" class="form-text">
            Please, insert the new plate.
            </div>
            </form>
        </div>
        </div>
        </div>
        </>
         );
        
}
 
export {FormularioAgregarMenu}