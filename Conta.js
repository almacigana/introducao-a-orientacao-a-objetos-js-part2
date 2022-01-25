// Classe abstrata pode ser herdada mas não pode ser instanciada diretamente
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.contructor == Conta){
            throw new Error;("Você não deveria instanciar um objeto do tipo Conta diretamente pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    //set é um modificador
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    //get é um assessor de acesso e sempre é público (ele não deixa atribuir, ele só deixa ler/assessar)
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }    
    
    //mátodo abstrato
    sacar(valor){
        throw Error("O método sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        
        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}