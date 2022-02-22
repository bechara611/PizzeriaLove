import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Componentes/Header';
import {BrowserRouter,Route, Routes,NavLink} from 'react-router-dom'
import {App,App2} from './App';
import WebFont from 'webfontloader'
import './index.css'
import Carousel from './Componentes/Carousel';
import Menu from './Componentes/Menu';
import Footer from './Componentes/Footer';
import { FormularioAgregarMenu } from './Componentes/FormularioAgregarMenu';

WebFont.load({
  google: {
    families: ['Open Sans:400,500,700', 'Sans-serif']
  }
});

const Index = () => {
  const [administrador,cambiaradministrador]=useState(false);
  return ( 
  <BrowserRouter> 
     <Header administrador={administrador} cambiaradministrador={cambiaradministrador}></Header> 
     <Carousel></Carousel>
  
    <Routes>
    <Route path='/administrador' element={<FormularioAgregarMenu />} ></Route>
    <Route path='/inicio' element={<Menu borrar={false} />} ></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    );
}
 

ReactDOM.render(
  
  <Index />,
  document.getElementById('root')
);


