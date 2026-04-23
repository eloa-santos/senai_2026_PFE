import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"; // Importando o HTML


export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <section className="login-section">
            <div className="login-card">
                <div>
                    
                </div>
                <div>
                    <h2>Login</h2>
                    <form action="" className="form-group">
                        <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                        <label htmlFor="usuario">Usuário</label>
                        <input  type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        <label htmlFor="senha">Senha</label>
                        <Link className="login-button">Login</Link>
                    </form>
                </div>
            </div>
        </section>
    )
}