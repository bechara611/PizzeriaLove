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
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }

`;


const AlertaPersonalizada= styled.div`
animation: ${animacion} 4s ease forwards;

`

export default Alerta;