import './FormularioAgregarMenu.css'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
let hola;

const FormularioAgregarMenu = () => {
    const [platos2,cambiarplatos2]=useState([{}])
    const [precio,cambiarPrecio]=useState('');
    return ( 
        <>
        <div className="container">
     <h2>Create a new pizza</h2>
        <form action="" className=''>
        <div className="row">
        <div className="col-12">
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
                cambiarPrecio(e.target.value.replace(/[^0-9.]/g,''));
            }}/>
            <div id="ayuda-number" className="form-text">
            Please, insert the price.
            </div>
            
            </div>
            
          
            
          
        </div>
        <div className="row">
        <div className="col-12 my-4">  <button type='submit' className=' btn btn-primary col-12'>INSERT</button></div>
        </div>
            </form>
        </div>
        
        </>
         );
        
}
 
export {FormularioAgregarMenu}