import "./formulario.css"

export default function Formulario(props) {
    const nome = props.nome
    const telemovel = props.telemovel
    const nif = props.nif
    const morada = props.morada
   
   
   
    return (
        <div className="InformacoesCandidato">
            <div className="divSize">
                <label>Nome:</label>
                <input>{nome}</input>
            </div>

            <div className="divSize">
                <label>Telemóvel:</label>
                <input>{telemovel}</input>
                <label>Nif:</label>
                <input>{nif}</input>
               
            </div>

            <div className="divSize">
                <label>Morada:</label>
                <input>{morada}</input>
            </div>
        </div>
        





            )
}





