import React, {Component} from 'react';
import { tsPropertySignature } from '@babel/types';

export default class Listas extends Component{
  render(){
    return(
      <div className="menu">
          <span>{this.props.titulo}</span>
      </div>
    );
  }
}