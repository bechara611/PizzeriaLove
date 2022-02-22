import React,{useState,useEffect} from 'react'
import { Heart2 } from '../Elementos/ImagenesSVG';
import { db } from '../Firebase/FirebaseConfig';
import { collection,addDoc,onSnapshot } from 'firebase/firestore';
import './Menu.css'
import useObtenerMenu from '../Hooks/useObtenerMenu';
import BorrarDocumento from '../Firebase/Borrar';

const Menu = ({borrar}) => {
   const [platos,cambiarplatos]=useObtenerMenu();

    
    return (
        <>
        <div className="container">
        <div className="row my-5">
        
        <div className="col titulo">
        {borrar===true ?   <h1 className=''>Admin, you can delete a plate here:</h1> :    <h1 className=''>Menu</h1>}
        
        </div>
        </div>
            <div className="row my-5">
           
             <div className="table-responsive">
            <table className="table table-hover table">
            <caption className='captionMenu'>PizzeriaLove<Heart2></Heart2></caption>
             <thead>
             <tr className={borrar===true?'table-success' : 'table-danger'}>
             <th>Number</th>
             <th>Pizza</th>
             <th>Category </th>
             <th>Price <Heart2></Heart2> </th>
             </tr>
             </thead>
             <tbody>
             {
                 platos.map((plato,index)=>{
                     return <React.Fragment key={index}>
                     <tr onClick={()=>{
                         if (borrar===true) {
                            BorrarDocumento(plato.id)
                         }
                        
                     }} >
                     <td>{index +1}</td>
                     <td>{plato.plato}</td>
                     <td>{plato.categorias}</td>
                     <td>{plato.precio}$ <Heart2></Heart2> </td>
                     </tr>
                     </React.Fragment>
                 })
             }
             </tbody>
             </table>
            </div>
            
        
            </div>
        </div>
        
        </>
       
        ) 
      
}
 
export  default Menu;