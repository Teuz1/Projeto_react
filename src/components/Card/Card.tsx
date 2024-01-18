import './Card.css'

// argumentos/parametros = propiedades / props

// Modelos de tipagem
// funciona como uma classe definindo uma tipagem
interface CardProps{
    titulo: String;
    descricao: String;
}

function Card({titulo, descricao}: CardProps) {
    return (
        <div className="card">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Card