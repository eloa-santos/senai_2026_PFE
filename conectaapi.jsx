import React, {useState, useEffect} from "react";

const ConectaAPI = () => {
    const[conselho, setConselho] = useState('');
    const[loading, setLoading] = useState(true);
    const[erro, setErro] = useState(null);

    // Função para buscar os dados da API
  const buscarDados = async () => {
    setLoading(true);
    try {
      const resposta = await fetch('https://api.adviceslip.com/advice');
      const dados = await resposta.json();
      setConselho(dados.slip.advice);
      setLoading(false);
    } catch (err) {
      setErro("Não foi possível carregar o conselho. Tente novamente.");
      setLoading(false);
    }
  };

  // Executa ao carregar o componente
  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>💡 Conselho do Dia</h2>
      
      {loading ? (
        <p>Carregando...</p>
      ) : erro ? (
        <p style={{ color: 'red' }}>{erro}</p>
      ) : (
        <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
          "{conselho}"
        </blockquote>
      )}

      <button 
        onClick={buscarDados} 
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Novo Conselho
      </button>
    </div>
  );
};

export default ConectaAPI;
