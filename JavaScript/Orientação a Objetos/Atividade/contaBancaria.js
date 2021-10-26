class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo(){
        return this._saldo
    }

    set saldo(saldo){
        this._saldo = saldo
    }

    sacar(valor){
        if (this.saldo <= valor){
            return `Operação negada. Saldo atual é de R$${this.saldo}.`
        }
        this.saldo -= valor
        return `Saldo atualizado: R$${this.saldo}`
    }

    depositar(valor){
        this.saldo += valor
        return `Saldo atualizado: R$${this.saldo}`
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartao){
        super(agencia, numero)
        this.tipo = 'Conta Corrente'
        this._cartaoCredito = cartao
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(cartao){
        this._cartaoCredito = cartao
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "Conta Poupança"
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "Conta Universitária"
    }

    sacar(valor){
        if(valor >= 500){
            return "Operação negada. Limite máximo de saque é de R$500,00"
        }
        if (this.saldo <= valor){
            return `Operação negada. Saldo atual é de R$${this.saldo}.`
        }
        this.saldo -= valor
        return `Saldo atualizado: R$${this.saldo}`
    }
}
