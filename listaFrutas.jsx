const frutas= ['Banana','Laranja','Uva', 'Pitaia']

export default function ListaFrutas({ titulo }) {
  const ListaFrutas = frutas.map((fruta) => {
    return (
      <li >
        <h3>{fruta}</h3>
        
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