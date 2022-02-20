import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Componentes/Header';
import {BrowserRouter,Route, Routes,NavLink} from 'react-router-dom'
import {App,App2} from './App';


const Index = () => {
  return ( 
  <BrowserRouter> 
     <Header></Header> 
    <Routes>
    <Route path='/' element={<App2 />} ></Route>
    <Route path='/inicio' element={<App />} ></Route>
    </Routes>

    </BrowserRouter>
    );
}
 

ReactDOM.render(
  
  <Index />,
  document.getElementById('root')
);


