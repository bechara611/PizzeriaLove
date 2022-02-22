import React,{useEffect,useState} from 'react'
import { db } from '../Firebase/FirebaseConfig';
import { collection,onSnapshot } from 'firebase/firestore';

const useObtenerMenu = () => {
    const [platos,cambiarplatos]=useState([{}])
    useEffect(()=>{
      
            const FuncionObtenerMenu=onSnapshot(collection(db,'menu'), (snapShot)=>{
    
               let vectormenu=snapShot.docs.map((documento)=>{
                   console.log(documento.id)
                    return {...documento.data(),id:documento.id}
                })
                
                cambiarplatos(vectormenu)
            }) 
            
        
       
      
           
          },[])
          return [platos,cambiarplatos]
}
 
export default useObtenerMenu;