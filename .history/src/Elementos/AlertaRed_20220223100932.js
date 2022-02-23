import styled,{keyframes} from "styled-components";
import React,{useEffect} from 'react'


const Alerta = ({CambiarAlertaGenerada,valorr}) => {
    useEffect(()=>{
        setTimeout(()=>{
            CambiarAlertaGenerada(false);
        },4000);

;     
    },[])
    return ( 

        <>
        <AlertaPersonalizada className="alert alert-success mt-3" role="alert">
        Incorrect password or user.</AlertaPersonalizada>
        
        </>
     );
}

const animacion = keyframes`
 0% {
display:flex;
 opacity: 0;
 }

 10% {
display:block;
 opacity: 1;
 }
 
 90% {

 opacity: 1;
 }

 100% {
    display:none;
 opacity: 0;
 }
`;


const AlertaPersonalizada= styled.div`
animation: ${animacion} 4s ease forwards;

`

export default Alerta;