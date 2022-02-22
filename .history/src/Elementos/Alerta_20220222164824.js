import styled,{keyframes} from "styled-components";


const Alerta = () => {
    return ( 

        <>
        <AlertaPersonalizada className="alert alert-success mt-3" role="alert">
        Register completed.</AlertaPersonalizada>

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
z-index:1000;
`

export default Alerta;