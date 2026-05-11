class Conta{
    constructor(nome, banco, numero, saldo){
        this._nome = nome;
        this._banco = banco;
        this._numero = numero;
        this._saldo = saldo;
    }
    get nome(){
        return this._nome;
    }
    set nome(valor){
        this._nome = valor; 
    }
    set banco(valor){
        this._banco = valor;
    }
    get banco(){
        return this._banco;
    }
    set numero(valor){
        this._numero = valor;
    }
    get numero(){
        return this._numero;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    get saldo(){
        return this._saldo;
    }
}

class Corrente extends Conta{
    constructor(nome, banco, numero, saldo, saldoEspecial){
        super(nome, banco, numero, saldo);
        this._saldoEspecial = saldoEspecial;
    }
    get saldoEspecial(){
        return this._saldoEspecial;
    }
    set saldoEspecial(valor){
        this._saldoEspecial = valor;
    }
}
class Poupanca extends Conta{
    constructor(nome, banco, numero, saldo, juros, vencimento){
        super(nome, banco, numero, saldo);
        this._juros = juros;
        this._vencimento = vencimento;
    }
    get juros(){
        return this._juros;
    }
    set juros(valor){
        this._juros = valor;
    }
    get vencimento(){
        return this._vencimento;
    }
    set vencimento(valor){
        this._vencimento = valor;
    }
}

function mostrarCorrente(){
    let conta = new Corrente(document.getElementById("nomeCorrente").value,
                            document.getElementById("bancoCorrente").value,
                            document.getElementById("numCorrente").value,
                            document.getElementById("saldoCorrente").value,
                            document.getElementById("saldoEspecial").value);
    alert("Conta Corrente\n\n" + "Nome: " + conta.nome + "\nBanco: " + conta.banco + "\nNúmero: " + conta.numero + "\nSaldo: " + conta.saldo + "\nSaldo Especial: " + conta.saldoEspecial);
}

function mostrarPoupanca(){

            let conta = new Poupanca(
                document.getElementById("nomePoupanca").value,
                document.getElementById("bancoPoupanca").value,
                document.getElementById("numPoupanca").value,
                document.getElementById("saldoPoupanca").value,
                document.getElementById("juros").value,
                document.getElementById("vencimento").value
            );

            alert(
                "CONTA POUPANÇA\n\n" + "\nNome: " + conta.nome + "\nBanco: " + conta.banco + "\nNúmero: " + conta.numero + "\nSaldo: " + conta.saldo + "\nJuros: " + conta.juros + "%" + "\nData de Vencimento: " + conta.vencimento);
}