import { useState } from "react";
import { Link } from "react-router-dom";
import './register.css'

export default function Register() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    return (
        <section className="login-section">
            <div className="login-card">
                <div className="login-image">
                    <div className="image-overlay">
                        <h1> Bem-vindo à Estação Meterológica SESI/SENAI </h1>
                    </div>
                </div>

                <div className="login-form-side">
                    <div className="form-wrapper">
                        <h2> Cadastro do Usuário </h2>
                        <p> Acesse sua conta para continuar. </p>
                       
                        <form className="login-form">
                            <div className="input-group">
                                <label htmlFor="usuario"> Usuário </label>
                                <input
                                    type="text"
                                    id="usuario"
                                    placeholder=" "
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="senha"> Senha </label>
                                <input
                                    type="password"
                                    id="senha"
                                    placeholder=" "
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="confsenha"> Confirme a Senha </label>
                                <input
                                    type="password"
                                    id="confsenha"
                                    placeholder="senha "
                                    value={confirmaSenha}
                                    onChange={(e) => setConfirmaSenha(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn-login"> Entrar </button>
                           
                           
                        </form>
                        <Link className="voltar" to='/'>Voltar</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}