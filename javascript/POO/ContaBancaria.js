class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return 'Seu saldo é de R$ ' + this._saldo+ ' reais.';
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo-=valor;
            return 'Foi sacado o valor de R$' + valor + ' reais de sua conta';
        }else{
            return 'Saldo insuficiente. Saque um valor menor.';
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo+= valor;
            return'Foi depositado o valor de R$' + valor + ' reais em sua conta';
        }else{
            return'O valor do depósito deve ser maior que 0';
        }
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoDeCredito){
        super(agencia, numero);
        this.tipo = 'Conta Corrente';
        this._cartaoDeCredito = cartaoDeCredito;
        this._saldo = 0;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }

    set cartaoDeCredito(cartaoDeCredito){
        this._cartaoDeCredito = cartaoDeCredito;
    }
    
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Poupança';
        this._saldo = 0;
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Universitária';
        this._saldo = 0;
    }

    sacar(valor){
        if(valor <= 500){
            this._saldo-= valor;
            return 'Foi sacado o valor de R$' + valor + ' reais de sua conta';

        }else{
            return 'O limite máximo de saque é de R$500 reais';
        }
    }
}

console.log('-------------CONTA BANCARIA--------------------\n')
const conta = new ContaBancaria(123, 456, 'corrente', 2000);
console.log(conta.saldo)
console.log(conta.depositar(1500))
console.log(conta.sacar(739))
console.log(conta.saldo)
console.log('\n')

console.log('-------------CONTA CORRENTE--------------------\n')
const contaCorrente = new ContaCorrente(6667, 098765, true);
console.log(contaCorrente.saldo)
console.log(contaCorrente.depositar(5000))
console.log(contaCorrente.sacar(2000))
console.log(contaCorrente.saldo)
console.log(contaCorrente.cartaoDeCredito)

console.log('-------------CONTA POUPANCA--------------------\n')
const contaPoupanca = new ContaPoupanca(6667, 098765, true);
console.log(contaPoupanca.saldo)
console.log(contaPoupanca.depositar(15000))
console.log(contaPoupanca.sacar(3000))
console.log(contaPoupanca.saldo)

console.log('-------------CONTA UNIVERSITARIA--------------------\n')
const contaUniversitaria = new ContaUniversitaria(6667, 098765, true);
console.log(contaUniversitaria.saldo)
console.log(contaUniversitaria.depositar(1000))
console.log(contaUniversitaria.sacar(501))
console.log(contaUniversitaria.saldo)







