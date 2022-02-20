import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import { BotonTipoNavLink } from '../Elementos/BotonTipoNavLink';
const Header = () => {
    let url1,url2;
    url1="#";
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
        <div className="container">
        <div>
         <a href={url1} className="navbar-brand">PizzeriaLove</a> 

        
          
        </div>
      
        <button 
        className="navbar-toggler"
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
      
      </nav>
       );
    }

    export default Header;
    