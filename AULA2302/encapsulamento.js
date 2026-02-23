class Pessoa{
    nome;//atributo público
    #cpf= '00100200304';//atributo privado

    //metodos gretter e setter
    //metodos publicos de acesso aos atributos
    setCpf(valor){
        this.#cpf = valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const estudante= new Pessoa();//instancia do objeto pessoa
estudante.nome = 'Livia';//acesso ao atributo publico nome
estudante.setCpf(22222222220);//acesso ao atributo privado cpf
console.log('O cpf é: '+ estudante.getCpf());//acesso ao atributo privado cpf

console.log(estudante.nome);//acesso ao atributo publico nome
