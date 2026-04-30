import Header from '../../components/header';
import './index.css'
import GraficoBarra from '../../components/header/graficoBarra';

export default function Dashboard(){
    return(
        <>
        <Header/>
        <section className='cards'>
            <div className='card'>
                <h6>Temperatura</h6>
                <h2>32°C</h2>
            </div>
            <div className='card'>
                <h6>Umidade</h6>
                <h2>60%</h2>
            </div>
            <div className='card'>
                <h6>Pressão Atmosferica</h6>
                <h2>1013 hPa</h2>
            </div>
            <div className='card'>
                <h6>Vento</h6>
                <h2>12 Km/h</h2>
            </div>
        </section>
        <section className='graficos'>
            <div>
                <GraficoBarra/>
               

            </div>
        </section>
        <section className='tabela'>
            <h6 className='titulo1'>Leituras Recentes</h6>
            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Temp.</th>
                        <th>Umidade</th>
                        <th>Vento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12:00</td>
                        <td>35°C</td>
                        <td>50%</td>
                        <td>13km</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>35°C</td>
                        <td>50%</td>
                        <td>13km</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>35°C</td>
                        <td>50%</td>
                        <td>13km</td>
                    </tr>
                </tbody>
            </table>
        </section>
        </>
    )
}