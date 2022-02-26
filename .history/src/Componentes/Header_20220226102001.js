import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { BotonTipoNavLink,BotonTipoNavLinkA } from '../Elementos/BotonTipoNavLink';
import {Pizza2,Administrador2,Inicio2,Menu2,Contacto2,Heart2,Casita2}from '../Elementos/ImagenesSVG';
import {App,App2} from './../App';
import './Header.css'


const Header = ({cambiaradministrador,administrador,cambiaradmin}) => {
    let url1,urladmin;
    url1="/inicio";
    urladmin='/administrador'
      return (
        <>
    
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark  header_nav">
        <div className="container contenedor1 text-center col-12 ">
        <div className='hijo1_header text-center col-12 col-sm-3 '>
         <BotonTipoNavLink to={url1} className="navbar-brand text-center "> <Heart2 / > PizzeriaLove <Pizza2></Pizza2></BotonTipoNavLink> 

        
          
        </div>
      <div className='hijo2_header text-center col-12 col-sm-3 '>
        <button 
        className="navbar-toggler mt-2 col-12 col-sm-3 text-center"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Mostrar / Ocultar Menu"
      >
        <span className="navbar-toggler-icon   "></span>
      </button>
    
      <div className="collapse navbar-collapse   " id="menu">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 header_menu ">
      <li className="nav-item opcion"><a href="#menuu" className="nav-link text-light  opcion" onClick={()=>{cambiaradmin('usuario')}}><Menu2></Menu2> Menu</a></li>
        <li className="nav-item"><BotonTipoNavLinkA to={url1} className="nav-link text-light" onClick={()=>{cambiaradmin('usuario')}}><Casita2/> Home</BotonTipoNavLinkA></li> 
        <li className="nav-item"><BotonTipoNavLink to={urladmin} className="nav-link text-light" onClick={()=>{cambiaradmin('admin')}}> <Administrador2 /> Administrator</BotonTipoNavLink></li>
      </ul>
    
    </div>
    </div>
        </div>
      
      </nav>
    
      </>
       );
    }

    export default Header;
    