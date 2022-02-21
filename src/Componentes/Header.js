import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { BotonTipoNavLink } from '../Elementos/BotonTipoNavLink';
import {Pizza2,Administrador2,Inicio2,Menu2,Contacto2,Heart2}from '../Elementos/ImagenesSVG';
import {App,App2} from './../App';
import './Header.css'


const Header = () => {
    let url1,url2;
    url1="/inicio";
      return (
        <>
      
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark  header_nav">
        <div className="container contenedor1 ">
        <div className='hijo1_header'>
         <BotonTipoNavLink to={url1} className="navbar-brand"> <Heart2 / > PizzeriaLove <Pizza2></Pizza2></BotonTipoNavLink> 

        
          
        </div>
      <div className='hijo2_header'>
        <button 
        className="navbar-toggler mt-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Mostrar / Ocultar Menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 header_menu">
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link"><Inicio2/> Inicio</BotonTipoNavLink></li> 
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link"><Menu2/> Menú</BotonTipoNavLink></li>
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link"> <Contacto2 /> Contacto</BotonTipoNavLink></li>
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link"> <Administrador2 /> Administrador</BotonTipoNavLink></li>
      </ul>
    
    </div>
    </div>
        </div>
      
      </nav>
    
      </>
       );
    }

    export default Header;
    