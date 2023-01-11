/* Herança em classes e muito mais facil de ser declarada ja que não se tem a nescessidade de se declarar a herança dentro da classe que ira herda os atributos da outra classe, basicamente precisamos apenas utlizar o operador "extends" como o nome da classse "pai" para dentro da classe "filho" */

class Pai{ //criando class
    constructor(nome){//construtor da classe
        this.nome = nome;
    }

    get desc(){// metodo dentro do protorype da classe
        console.log(`ola ${this.nome} `)
    }
}
class Filho extends Pai{} //"herança", basicamente estamos passando os atributos/metodos da calsse pai para dentro da classe filho

const p1 = new Pai('wellington');
const p2 = new Filho('wallison')

p1.desc;
p2.desc;

//Obs utilizamos o metodo "get" para mostrar algo pro usuario, ou seja, nesse caso se torna mais facil de se chamar o metodo pelo fato dele não ser tratado como metod mais sim como atributo assim como foi declarado acima

/*em herança caso queira acrescentar novas funcionalidades ou atributos para a classe basta definir dentro do seu bloco de codigo 
Obs: pelo fato da classe esta herdando funcionalidade de outra classe temos que o manipular de forma diferente o contrutor da nova classe para que podemos adicionar novos atributos */

//para não ter a nescessidade de reescrever os atributos do contrutor pai como estamos herdando suas funcionalidade podemos passar esse atributos para o contrutor da classe filho utilizando o metodo "super()" basicamente com esse metodo podemos definir quais atributos queremos herdar, o metodo "super()" e similar ao metodo "call()" da factory construct porem sendo mais facil de ser manipulado 

class Neto extends Pai{
    constructor(nome, idade){
        super(nome); //utilizando esse metodo nos polpa de ter que ta declarando toda hora no contrutor "this.atributo = parametro;"
        this.idade = idade;
    }
}

const n1 = new Neto('null', 0);

console.log(n1);