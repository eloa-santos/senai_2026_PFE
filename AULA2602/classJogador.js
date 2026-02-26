class Jogador { // classe mãe
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }

    // Getters para permitir acesso aos campos privados
    get nome() { return this.#nome; }
    get numero() { return this.#numero; }

    treinar() {
        return '3x na semana';
    }
}

// class jogadorFutebol - classe filha
class jogadorFutebol extends Jogador {
    #peDominante;
    #totalGols;

    constructor(peDominante, totalGols, nome, numero) {
        super(nome, numero); // Chama o construtor da mãe
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    }

    driblar() {
        return 'Tomou uma caneta';
    }

    fazerGol(qtsGols) {
        return this.#totalGols += qtsGols;
    }

    // Agora acessamos os dados através dos getters da classe mãe
    mostrar() {
        return `O jogador: ${this.nome}, número: ${this.numero}, pé dominante: ${this.#peDominante}, tem ${this.#totalGols} gols.`;
    }
}

const jogador = new jogadorFutebol('esquerdo', 20, 'Kelvin Destaque', 7);
jogador.fazerGol(2);
console.log(jogador.mostrar());