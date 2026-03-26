const estudantes = [
  { id: 1, nome: "Pedro Rocath", ra: 123444, disciplina: 'Historia' },
  { id: 2, nome: "Pedro Gonzales", ra: 123323, disciplina: 'Artes' },
  { id: 3, nome: "Kelvin Destaque", ra: 123888, disciplina: 'Artes' },
];

export default function ListaFilter({ titulo }) {
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Artes')
  const listaEstudantes = estudantes.map((estudante) => {
    return (
      <li key={estudante.id}>
        <h3>{estudante.nome}</h3>
        <p>{estudante.ra}</p>
        <p>{estudante.idade}</p>
      </li>
    );
  });
  return (
    <>
      <h1>{titulo}</h1>
      <ul>{listaEstudantes}</ul>
    </>
  );
}
