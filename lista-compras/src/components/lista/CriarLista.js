import React, { Component } from 'react'

import Menu from '../menu/Menu';
import icone from '../../img/paginaAnterior.png';

import ListaService from '../../services/ListaService';

export default class CriarLista extends Component {

    state = {
        nome: ''
    };

    aoAlterarNome= (event)=>{
        const nome = event.target.value;
        this.setState({nome});
    }

    salvar = (event) => {
        event.preventDeffault();

        const service = new ListaService();
        const lista = this.state;
        service.salvar(lista);
        /**
         * Faz o encaminhamento para a pagina inicial do app
         */
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Menu
                    paginaAnterior="/"
                    titulo="Criar lista"
                    logo={icone} />

                <form id="formNovaLista" onSubmit={this.salvar}>
                    <input
                        onChange={this.aoAlterarNome}
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        required
                        placeholder="Digite o nome da lista" />
                    <input type="submit" value="Criar" />
                </form>
            </div>
        )
    }
}
