import { Link } from "react-router-dom";
import './header.css'

export default function Header(){
    return(
        <header className="header">
            <h2>Estação Meteorológica</h2>
            <nav className="card">
                <ul>
                    <li className="home">
                        <Link to='/dashboard'>Home</Link>
                    </li>
                    <li className="cadastro">
                        <Link to='/cadastro'>Cadastro</Link>
                    </li>
                    <li className="relatorio">
                        <Link to='/relatorio'>Relatório</Link>
                    </li>
                    <li className="sair">
                        <Link to='/'>Sair</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}