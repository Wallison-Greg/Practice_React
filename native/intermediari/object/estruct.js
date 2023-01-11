/* Basicamente um objeto e um elemento que define caracteristica de algo ou seja basicamente e uma variavel que que define atributos de um elemento em expecifico */
/** estrutura literal de um objeto */
const pessoa = {
    nome: 'wallison',
    idade: 21,
    peso: 60
};

/* estrutura construtora de um objeto */

const pessoa1 = new Object();

pessoa1.nome = 'lucas';
pessoa1.idade = 21;
pessoa1.peso = 65;


/* Basicamente utilizando a estrutura construtora de um objeto e nescessario definir os seus atributos e valores fora do bloco de comando do objeto  */

/* como no exemplo assima definimos um objeto pessoa com 3 caracteristicas que no caso serião o seus atributos nesse caso ja passamos os valores para essas caracteristicas */

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.peso);

/* podemos trazer os valores contidos dentro de um objeto tanto pela chamado do proprio objeto como a chamada de um atributo em expecifico */

/* em objetos assim como em funções "factory" podemos definir metos ou seja funcionalidade que serão aplicadas ao objeto assim que sua condição for comprida ou o mesmo for chamado */

const p3 = {
    nome: 'wallison',
    idade: 21,
    peso: 60,

    valores(){
        console.log(this.nome, this.idade, this.peso);
    }
}

p3.valores();

/* Existem funções que tem como objetivo gerar um objeto nesse caso são 3 em expecifico 
- factory function
- construct function
- class

basicamente com esses 3 modelos de funções podemos gerar novos objetos ou seja utilizamos essa função para criar o escopo e as funcionalidades de um objeto para que posteriormente possamos gerar um novo obejto apenas passando os seus valores ao invez de ter que definir sempre o seus atributos e funcionalidades*/

/* em caso de objetos declarado dentro de uma constante que no geral a grande maioria são definidos assim não podemos alterar os atributos dele mais sim os seus valores, para bloquear a alteração dos valores dos atributos de um objetos podemos utilizar o metodo (Object.freeze()) apos definir ele qualquer tentativa de alteração de valores sera anulada assim como no exemplo definido a baixo */

const p4 = {
    nome: 'wallison',
    idade: 21,
    peso: 60,
}

Object.freeze(p4);

p4.nome = 'diogo';

console.log(p4);

/* observa-se que foi passado um novo valor para o atributo "nome" do objeto pirem esse valor foi anulado pois foi definido o metodo (Object.freeze())*/