class ValidaCpf{
    constructor(cpf){
        this.cpf = cpf;
        this.cpfLimpo = cpf.replace(/\D+/g, '');
    }

    valida(){

        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;

        const parcial = this.cpfLimpo.slice(0, -2);

        const digito1 = this.criaDigito(parcial);
        const digito2 = this.criaDigito(parcial + digito1);

        const novoCpf = parcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial){

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
}


const us1 = new ValidaCpf('705.484.450-52');

console.log(us1.valida());
