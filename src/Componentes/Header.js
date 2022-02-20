import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { BotonTipoNavLink } from '../Elementos/BotonTipoNavLink';
import {App,App2} from './../App';
import './Header.css'
const Header = () => {
    let url1,url2;
    url1="/inicio";
      return (
        <>
        <nav className="navbar navbar-expand-sm navbar-light   nav">
        <div className="container-fluid contenedor1 bg-danger ">
        <div className='hijo1'>
         <BotonTipoNavLink to={url1} className="navbar-brand">PizzeriaLove</BotonTipoNavLink> 

        
          
        </div>
      <div className='hijo2'>
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link">Inicio</BotonTipoNavLink></li> 
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link">Categorias</BotonTipoNavLink></li>
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link">Blog</BotonTipoNavLink></li>
        <li className="nav-item"><BotonTipoNavLink to={url1} className="nav-link">Contacto</BotonTipoNavLink></li>
      </ul>
    
    </div>
    </div>
        </div>
      
      </nav>
   
      </>
       );
    }

    export default Header;
    