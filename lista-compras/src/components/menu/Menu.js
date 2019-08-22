import React, {Component} from 'react';
import { tsPropertySignature } from '@babel/types';
import {Link} from 'react-router-dom';

import './Menu.scss';

export default class Listas extends Component{
  render(){
    return(
      <div className="menu">
        <Link to={this.props.paginaAnterior}>
          <img className= "logo"src={this.props.logo}alt="Voltar"/>
          </Link>
          <span>{this.props.titulo}</span>
      </div>
    );
  }
}