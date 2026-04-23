const frutas= [
    {id: 1,nome: 'Banana'},
    {id: 2,nome: 'Manga'},
    {id: 3,nome: 'Uva'},
    {id: 4,nome: 'Pitaia'}
]

export default function ListaFrutas({ titulo }) {
  const ListaFrutas = frutas.map((fruta) => {
    return (
      <li key={fruta.id}>
        <h3>{fruta.nome}</h3>
        
      </li>
    );
  });
  return (
    <>
      <h1>{titulo}</h1>
      <ul>{ListaFrutas}</ul>
    </>
  );
}