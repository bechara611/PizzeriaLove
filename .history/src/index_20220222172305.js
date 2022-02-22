import React from 'react';
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
  return ( 
  <BrowserRouter> 
     <Header></Header> 
     <Carousel></Carousel>
    <Routes>
    <Route path='/' element={<Menu />} ></Route>
    <Route path='/inicio' element={<Menu borrar={true} />} ></Route>
    </Routes>
    <FormularioAgregarMenu></FormularioAgregarMenu>
    <Footer></Footer>
    </BrowserRouter>
    );
}
 

ReactDOM.render(
  
  <Index />,
  document.getElementById('root')
);


