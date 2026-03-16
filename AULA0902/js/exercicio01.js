const fundo=document.getElementById('corpo');
const fundoPagina=document.querySelector('#corpo');//seletor id
//document.querySelector('.corpo')//seletor class
const titulo= document.querySelector('.titulo');
const paragrafo= document.querySelector('.paragrafo');

fundo.style.backgroundColor= '#d0c6f3';
titulo.style.color= '#002a3e';
titulo.style.fontSize= '48px';
titulo.textContent+= ' -  Eloá';
paragrafo.textContent+= ' -  texto';
titulo.style.fontFamily='Arial'
paragrafo.style.fontSize= '30px';