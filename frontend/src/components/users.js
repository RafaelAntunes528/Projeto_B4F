import "./useres.css"
import pic from "./transferir.jpg"
import React, { useState } from "react"

export default function UsersBoard(props) {
    const nome = props.nome
    const idade = props.idade
    const nif = props.nif
    const status = props.status

    const [cl, setcl] = useState()

    React.useEffect(() => {
        if (status === "Aprovado") {
            setcl("apro")
        } else setcl("repro")
    })


    return (
        <div className={"Main"}>
            <div className={cl}>
                <img src={pic} alt={"profile"}></img>
                <div>
                    <p><b>Nome</b>: {nome}</p>
                    <p><b>Idade</b>: {idade}</p>
                    <p><b>NIF</b>: {nif}</p>
                    <p><b>Status</b>: {status}</p>
                </div>

            </div>

        </div>
    )
}