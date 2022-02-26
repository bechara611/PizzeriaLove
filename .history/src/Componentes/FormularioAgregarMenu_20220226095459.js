import './FormularioAgregarMenu.css'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { db,app } from '../Firebase/FirebaseConfig';
import { addDoc,collection } from 'firebase/firestore';
import Alerta from '../Elementos/Alerta';
import Menu from './Menu';
import AlertaRed from '../Elementos/AlertaRed';




const FormularioAgregarMenu = () => {
    const [platos2,cambiarplatos2]=useState([{}])
    const [precio,cambiarPrecio]=useState('');
    const [categoria,cambiarCategoria]=useState('');
    const [plato,cambiarPlato]=useState('');
    const [AlertaGenerada,CambiarAlertaGenerada]=useState(false);
    const [acceder,CambiarAcceder]=useState(false);
    const [usuario,cambiarUsuario]=useState('');
    const [clave,cambiarClave]=useState('');
    const [Alerta2,cambiarAlerta]=useState(false);

    const Registrar =async () => {
        try {
            await addDoc(collection(db,'menu'),
        {
            categorias:categoria,
            plato:plato,
            precio:precio
        })
        cambiarPlato('');
        cambiarCategoria('');
        cambiarPrecio('')
        CambiarAlertaGenerada(false);
        } catch (error) {
            console.log(error)
        }
        
    }
     


    return ( 
        <>
        {Alerta2===true
        ?
        <AlertaRed CambiarAlertaGenerada={cambiarAlerta}></AlertaRed>
        :
        <></>
        }
        {acceder===false ?
           
            
            <div className="container ">
           
            <form action="" className='py-5 ' onSubmit={(e)=>{
                e.preventDefault();
                if(clave==='123456' && usuario.toUpperCase()==='ADMIN'  )
                {
                    CambiarAcceder(true);
                }else
                {
                    cambiarAlerta(true);
                }
            }}>
            <div className="row">
       
            <div className="col-6">
            <label htmlFor="correo" className="form-label">User</label>
            <input type="text" value={usuario} name="usuario" id="usuario" className='form-control py-1 usuario ' aria-describedby='usuario' onChange={((e)=>{
                
                cambiarUsuario(e.target.value)
            })} />
            <div id="usuario" className="form-text py-2">
             Admin
            </div>
            </div>
    
            <div className="col-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={clave} name="password" id="password" className='form-control' aria-describedby='password' onChange={(e)=>{
                cambiarClave(e.target.value);
            }} />
            <div id="password" className="form-text">
             Please, insert your password
            </div>
            </div>
            </div>
       
           
            <div className="row">
            <div className="col-12 my-4">  <button type='submit' className=' btn btn-success col-12'>LOGIN</button></div>
            </div>
            
         
    
            </form>
            </div>
            :
            <></>
        }
       
       




       {acceder===true ?
         <>
         <div className="container my-5 contenedor_formulario">
     <h2 className='my-3 text-center'>Create a new pizza</h2>
     {AlertaGenerada && <Alerta CambiarAlertaGenerada={CambiarAlertaGenerada} valorr={3}></Alerta>}
        <form action="" className='' onSubmit={(e)=>{
            e.preventDefault();
            Registrar();
        }}>
        <div className="row">
        <div className="col-12">
        <label htmlFor='plato' className="form-label">New plate</label>
            <input value={plato} required type="text" className='form-control' name="plato" id="plato" aria-describedby='ayuda-plato' 
            onChange={(e)=>{
                cambiarPlato(e.target.value.toUpperCase())
            }}/>
            <div id="ayuda-plato" className="form-text">
            Please, insert the new plate.
            </div>
            </div>
            <div className="col-6">
            <label htmlFor='categorias' className="form-label">Category</label>
            <input required value={categoria} type="text" className='form-control' name="categorias" id="categorias" aria-describedby='ayuda-categorias' 
            onChange={(e)=>{
                cambiarCategoria(e.target.value.toUpperCase())
            }} />
            <div id="ayuda-plato" className="form-text">
            Please, insert the categoria.
            </div>
            </div>
            <div className="col-6">
            <label htmlFor='precio' className="form-label">Price</label>
            <input required value={precio} type="text" className='form-control' name="precio" id="precio" aria-describedby='ayuda-number'
             onChange={(e)=>{
                cambiarPrecio(e.target.value.replace(/[^0-9.]/g,''));
            }}/>
            <div id="ayuda-number" className="form-text">
            Please, insert the price.
            </div>
            
            </div>
            
          
            
          
        </div>
        <div className="row">
        <div className="col-12 my-4">  <button type='submit' className=' btn btn-primary col-12' onClick={()=>{
            
        }}>INSERT</button></div>
        </div>
            </form>
        </div>
        
        <Menu borrar={true}></Menu>

        <div className="row">
        <div className="col-12 d-flex justify-content-center py-5">
        <button className='btn btn-danger col-4 ' onClick={()=>{
            CambiarAcceder(false)
            cambiarUsuario('')
            cambiarClave('')
        }}>Logout</button>
        </div>
        </div>
         </> 
         :
          <></>}
        
        </>
         );
        
}
 
export {FormularioAgregarMenu}