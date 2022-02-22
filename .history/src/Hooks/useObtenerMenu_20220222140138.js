import React,{useEffect,useState} from 'react'
import { db } from '../Firebase/FirebaseConfig';
import { collection,addDoc,onSnapshot } from 'firebase/firestore';

const useObtenerMenu = () => {
    const [platos,cambiarplatos]=useState([{}])
    useEffect(()=>{
        const LeerMenu  = async() => {
            const FuncionObtenerMenu=onSnapshot(collection(db,'menu'), (snapShot)=>{
    
               let vectormenu=snapShot.docs.map((documento)=>{
                    return {...documento.data()}
                })
                console.log(vectormenu[0].plato);
                cambiarplatos(vectormenu)
            }) 
            
        }
         LeerMenu();
      
           
          },[])
          return [platos,cambiarplatos,FuncionObtenerMenu]
}
 
export default useObtenerMenu;