import { useState } from "react";

export default function Calculadora({titulo}){

    const [num1, Setnum1] = useState(0);
    const [num2, Setnum2] = useState(0);
    const [resultado, Setresultado] = useState(0);

    const calcular=(operacao)=>{
        const n1= Number(num1);
        const n2= Number(num2);

        switch(operacao){
            case "soma": Setresultado(n1+n2); break;
            case "sub": Setresultado(n1-n2); break;
            case "mult": Setresultado(n1*n2); break;
            case "div": Setresultado(n2 !==0 ? n1/n2 : "Erro (Div/0"); break;
            case "pot": Setresultado(Math.pow(n1, n2)); break;
            case "raiz": Setresultado(Math.sqrt(n1).toFixed(2)); break;
            default: break;
        }
    };

    const limpar= () =>{
        Setnum1(0);
        Setnum2(0);
        Setresultado(0);
    };

    return(
        <div className="card-calculadora">
            <h1>{titulo}</h1>

            <div className="inputs-group">
                <input type="number" value={num2} onChange={(e) => Setnum2(e.target.value)} placeholder="Número 2"></input>
            </div>

            <div className="botoes-grid">
        <button onClick={() => calcular("soma")}>+</button>
        <button onClick={() => calcular("sub")}>-</button>
        <button onClick={() => calcular("mult")}>x</button>
        <button onClick={() => calcular("div")}>÷</button>
        <button onClick={() => calcular("pot")}>^</button>
        <button onClick={() => calcular("raiz")}>√ (n1)</button>
        <button className="btn-limpar" onClick={limpar}>Limpar</button>
      </div>

      {resultado !== null &&(
        <div className="resultado-box">
            <h2>Resultado: {resultado}</h2>
            </div>
      )}
        </div>
    );
}