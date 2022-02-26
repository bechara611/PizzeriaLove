import styledComponents from 'styled-components';
import {ReactComponent as Pizza} from './../Imagenes/Pizza.svg'
import {ReactComponent as Inicio} from './../Imagenes/Inicio.svg'
import {ReactComponent as Menu} from './../Imagenes/Menu.svg'
import {ReactComponent as Administrador} from './../Imagenes/Administrador.svg'
import {ReactComponent as Contacto} from './../Imagenes/Contacto.svg'
import {ReactComponent as Heart} from './../Imagenes/Heart.svg'
import {ReactComponent as Trash} from './../Imagenes/Trash.svg'
import {ReactComponent as Home} from './../Imagenes/Home.svg'
const Pizza2 = styledComponents(Pizza)`
font-size:10px;
z-index: 1;
color:white;
fill:red;

`;
const Inicio2 = styledComponents(Inicio)`
font-size:10px;
z-index: 1;
color:white;
fill:white;

`;
const Menu2 = styledComponents(Menu)`
font-size:10px;
z-index: 1;
color:white;
fill:white;

`;
const Administrador2 = styledComponents(Administrador)`
font-size:10px;
z-index: 1;
color:white;
fill:white;

`;

const Contacto2 = styledComponents(Contacto)`
font-size:10px;
z-index: 1;
color:white;
fill:white;

`;

const Heart2 = styledComponents(Heart)`
font-size:10px;
z-index: 1;
color:white;
fill:red;

`;

const Trash2=styledComponents(Trash)`
fill:blue;
cursor:pointer;
`

export {Pizza2,Administrador2,Inicio2,Menu2, Contacto2,Heart2,Trash2,Home}