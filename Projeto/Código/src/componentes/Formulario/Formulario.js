import React from 'react'
import Grupo from './Grupo/Grupo'
import Legenda from './Legenda/Legenda'
import CaixaTexto from './CaixaTexto/CaixaTexto'
import Botao from './Botao/Botao'
import Link from './Link/Link'
import './Formulario.css'


function Formulario(props) {
    return (
        <div className="formulario">
            <h2>{props.titulo}</h2>
            
            <p>{props.texto}</p>

            <form onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
    )
}

Formulario.Grupo = Grupo
Formulario.Legenda = Legenda
Formulario.CaixaTexto = CaixaTexto
Formulario.Botao = Botao
Formulario.Link = Link

export default Formulario