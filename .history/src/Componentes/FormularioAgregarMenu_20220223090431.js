import './FormularioAgregarMenu.css'
import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { db,app } from '../Firebase/FirebaseConfig';
import { addDoc,collection } from 'firebase/firestore';
import Alerta from '../Elementos/Alerta';
import Menu from './Menu';





const FormularioAgregarMenu = () => {
    const [platos2,cambiarplatos2]=useState([{}])
    const [precio,cambiarPrecio]=useState('');
    const [categoria,cambiarCategoria]=useState('');
    const [plato,cambiarPlato]=useState('');
    const [AlertaGenerada,CambiarAlertaGenerada]=useState(false);
    const [acceder,CambiarAcceder]=useState(false);

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
        CambiarAlertaGenerada(true);
        } catch (error) {
            console.log(error)
        }
        
    }
     


    return ( 
        <>
       {acceder===true ? <> </> : <></>}
        
        </>
         );
        
}
 
export {FormularioAgregarMenu}