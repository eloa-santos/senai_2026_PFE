import Header from '../../components/header';
import './relatorio.css';
import GraficoBarra from '../../components/header/graficoBarra';


export default function Relatorio(){
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: "26°C", umidade: "68%"},
        {horario: "13:00", qualidadeAr: "Boa", iqa: 41, temperatura: "28°C", umidade: "65%"},
        {horario: "14:00", qualidadeAr: "Boa", iqa: 42, temperatura: "28°C", umidade: "65%"},
        {horario: "15:00", qualidadeAr: "Média", iqa: 39, temperatura: "30°C", umidade: "65%"},
        {horario: "16:00", qualidadeAr: "Boa", iqa: 41, temperatura: "28°C", umidade: "67%"}
    ]

    return(
        <div className='container'>
            <Header/>
            <h3>Relatório Estação Meteorológica </h3>
            <p>Monitoramento da temperatura e umidade em tempo real</p>
            <section className='graficos'> 
                <GraficoBarra/>
            </section>

            <section className='tabela-leituras'>
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map
                            ((item, index) =>(
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAr}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
        
    )
}