class Estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome, ra, cpf){
        this.nome= nome;
        this.#ra =ra;
        this.#cpf= cpf;
    }
}

const Eloa= new Estudante('Eloa Rodrigues', 44444441, 47707655842)
console.log(Eloa)