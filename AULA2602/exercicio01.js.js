class Jogador {
    constructor(nome, numero) {
        this.nome = nome;
        this.numero = numero;
    }
}

class JogadorFutebolAmericano extends Jogador{
    #listaJogadas;
    #jardasConquistadas;

    constructor(listaJogadas, jardasConquistadas, nome, numero){
        super(nome, numero);
        this.#listaJogadas= listaJogadas;
        this.#jardasConquistadas= jardasConquistadas;
    }
    fazerTouchDown(){
        return `O jogador número ${this.numero} fez touchdown!`;
    }
    bloquear(){
        return "Bloqueio realizado com sucesso!";
    }
    correrJardas(valor){
        this.jardasConquistadas  += valor;
        return `O jogador correu ${valor} jardas. Total: ${this.#jardasConquistadas}`;
    }
}

//jogador de basquete

class JogadorBasquete extends Jogador{
    #alturaSalto;
    #totalCestas;

    constructor(alturaSalto, totalCestas, nome, numero){
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas= totalCestas;
    }
    arremessar(){
        return `O jogador: ${this.nome} e número: ${this.numero} arremessou a bola.`;
    }
    fazerEnterrada(){
        this.#totalCestas++;
        return "Enterrada espetacular!";
    }
}

//testando futebol americano
const quaterback= new JogadorFutebolAmericano(['Slant', 'Hail Mary'], 150, 'Tom Brady', 12);
console.log(quaterback.fazerTouchDown());


//testando basquete
const cestinha= new JogadorBasquete(1.2, 50, 'LeBron James', 23);
console.log(cestinha.arremessar());