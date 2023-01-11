function ValidaCpf(cpf){ //função construtora para validar o cpf

    Object.defineProperty(this, 'cpfLimpo', { //atributo recebendo o parametro da função e tirando os caracteres inuteis
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g, '');
        }
    });

};

ValidaCpf.prototype.valida = function(){ //metodo que receberar a funcionalidades dos demais metos para serem chamados 

    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const parcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(parcial);
    const digito2 = this.criaDigito(parcial + digito1);

    const novoCpf = parcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo; //verificando se o cpf esta validado 

};

ValidaCpf.prototype.criaDigito = function(cpfParcial){ // metodo que ira gerar os dois ultimos digitos do cpf
    const cpfArray = Array.from(cpfParcial);
    let regrecive = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regrecive * Number(val));
        regrecive --;
        return ac;
    }, 0);

    let digito = 11 - (total % 11);

    return digito > 9 ? '0' : String(digito);

}

const usuario = new ValidaCpf('705.484.450-52');

console.log(usuario.valida());