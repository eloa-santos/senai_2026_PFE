import { useState } from 'react';
import Header from '../../components/header';
import './cadastro.css';

export default function Cadastro(){
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [documento, setDocumento] = useState('')

    return (
        <section className='container'>
            <Header/>
            <h2>Cadastro de dados pessoais</h2>

            <form className='form' action="">
                <label htmlFor='nome'>Nome</label>
                <input className='input' type='text' id='nome' placeholder='Digite seu nome completo' value={nome} onChange={(e) => setNome(e.target.value)} />

                <label htmlFor='endereco'>Endereço</label>
                <input className='input' type='text' id='endereco' placeholder='Digite o seu endereço' value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                <label htmlFor='email'>E-mail</label>
                <input className='input' type='text' id='email' placeholder='Insira um E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='celular'>Celular</label>
                <input className='input' type='text' id='celular' placeholder='00 00000-0000' value={celular} onChange={(e) => setCelular(e.target.value)} />

                <label htmlFor='documento'>Documento</label>
                <input className='input' type='text' id='documento' placeholder='000.000.000-00' value={documento} onChange={(e) => setDocumento(e.target.value)} />

                <button className='salvar'>
                    Salvar
                </button>
            </form>
        </section>
    )
}
