import React,{useEffect,useState} from 'react'
import { Heart2 } from '../Elementos/ImagenesSVG';
import './Menu.css'


const Menu = () => {
    const [platos,cambiarplatos]=useState([
        {
        id:1,
        plato:'Bisteck',
        categorias:'Meat',
        precio:'4.00$'
         },
         {
            id:2,
            plato:'Bisteck',
            categorias:'Meat',
            precio:'4.00$'
             },
             {
                id:3,
                plato:'Bisteck',
                categorias:'Meat',
                precio:'4.00$'
                 },
                 {
                    id:4,
                    plato:'Bisteck',
                    categorias:'Meat',
                    precio:'4.00$'
                     },
         {
            id:5,
            plato:'Chicken',
            categorias:'Meat',
            precio:'5.00$'
             },
             {
                id:6,
                plato:'Bisteck',
                categorias:'Meat',
                precio:'4.00$'
                 },
                 {
                    id:7,
                    plato:'Bisteck',
                    categorias:'Meat',
                    precio:'4.00$'
                     }
])
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
                     <td>{plato.precio} </td>
                    
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
        
        );
}
 
export default Menu;