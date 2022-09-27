import React from "react"
import "./barraMenu.css"
import svg from "../assets/logo_branco.svg"
import perfil from "../assets/FotoPerfil.png"
export default function BarraMenu() {

    return (
        <div>
            <div className="BarraMenu">
                <div className="PerfilBarraMenu">
                    <img src={perfil} />
                </div>
                <div className="DescricaoPerfilBarraMenu">
                    <h1>Afonso</h1>
                    <h2>Aprendiz</h2>

                </div>
                <div className="BotoesBarraMenu">

                    <button>Editar Perfil</button>
                    <button>Reunião</button>
                    <button>Ver Candidatura</button>
                    <button>Despromover</button>

                </div>
                <div className="BotaoSairBarraMenu">

                    <button className="BotaoSair">Sair</button>

                </div>
                <div className="LogoBarraMenu">
                    <img src={svg} />

                </div>
            </div>
        </div>
    )
}

