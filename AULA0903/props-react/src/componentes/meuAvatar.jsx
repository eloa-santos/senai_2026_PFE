

export default function Avatar(props){
    return(
        <>
        <h3>{props.nome}</h3>
        <h3>{props.idade}</h3>
        <h3>{props.estilo}</h3>
        <h3>{props.diciplina}</h3>
        <img
        src={props.foto}
        alt={`Foto de perfil de ${props.nome}`}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }} // Exemplo de estilo para foto redonda
      />

        </>
    )
}