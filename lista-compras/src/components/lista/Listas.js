import React, {Component} from 'react';
import Menu from '../menu/Menu';
import '../../img/logo.png';

export default class Listas extends Component{
  render(){
    return(
      <div>
        <Menu logo={logo} paginaAnterior="/"titulo="Lista de Compras"/>
         Listas
         
      </div>
    );
  }
}