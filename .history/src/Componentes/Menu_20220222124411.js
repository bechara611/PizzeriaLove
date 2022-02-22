import React,{useState,useEffect} from 'react'
import { Heart2 } from '../Elementos/ImagenesSVG';
import { db } from '../Firebase/FirebaseConfig';
import { collection,addDoc,onSnapshot } from 'firebase/firestore';
import './Menu.css'


const Menu = () => {
    const [platos,cambiarplatos]=useState([{}])
useEffect(()=>{
    const LeerMenu  = async() => {
        onSnapshot(collection(db,'menu'), (snapShot)=>{

           let vectormenu=snapShot.docs.map((documento)=>{
                return {...documento.data()}
            })
            console.log(vectormenu[0].plato);
            cambiarplatos(vectormenu)
        }) 
    }
     LeerMenu();
  
       
      },[])
    
    return (
        <>
        <div className="container">
        <div className="row my-5">
        
        <div className="col titulo">
        <h1 className=''>Menu</h1>
        </div>
        </div>
            <div className="row my-5">
           
             <div className="table-responsive">
            <table className="table table-hover table">
            <caption className='captionMenu'>PizzeriaLove<Heart2></Heart2></caption>
             <thead>
             <tr className="table-danger">
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
                     <tr >
                     <td>{index +1}</td>
                     <td>{plato.plato}</td>
                     <td>{plato.categorias}</td>
                     <td>{plato.precio}$ </td>
                    
                     </tr>
                     </React.Fragment>
                 })
             }
             </tbody>
             </table>
            </div>
            
        
            </div>
        </div>
        [platos]
        </>
       
        ) 
      
}
 
export  default Menu;