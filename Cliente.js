export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    autenticar(){
        return true;
    }
}


// o #saldo realmente deixaria o saldo privado.. mas até então o _ é usado apesar de não o tornar realmente privado.. porém significa que ninguém pode mexer nisso
