import './App.css';
import logoSesi from './assets/img/sesi-logo-2.png';//importando imagens
import logoSenai from './assets/img/logosenai.png';

export default function App() {

  return (
    <>
    
    <div className='container'>
      <img src={logoSesi} alt="Logo do sesi" className='logosesi'></img>
      <img src={logoSenai} alt="Logo do senai" className='logosenai'></img>
      <h1 className='titulo'>Login</h1>
      <span className='subtitulo'>para continuar</span>
      <label htmlFor='nome'className='label'>Nome</label>
      <input type='text' className='campo' id='nome' placeholder='Seu nome'></input>

      <label htmlFor='senha'className='label'>Senha</label>
      <input type='text' className='campo' id='senha' placeholder='******'></input>
      <button className='botao'>Log in</button>
      <a className='textoFooter'>Esquece a senha?</a>
      <a className='textoFooter'>Cadastre-se!</a>
    </div>
    
    
    </>
  )
}

//export default App;
