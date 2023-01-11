/* Basicamente classes em Js e similar as demais linguagem utilizando o seu corpo principal como escopo para outros objetos 
a sua estrutura e similar a estrutura da "cosntruct function" tendo algumas utilidades mais praticas o diferenciando da função construtora

O seu diferencia para a função construtora e o fato de não ter tanta nescessidade de se utilizar o operador "this" sendo assim utilizado em alguns casos e os metodos definidentro dentro da classe são altomaticamente definidos dentro do 'prototype' do objeto ou seja utilizando a classe ou "class" para definir metodos privados dentro do prototype do objeto não tem a nescessidade de se definir utilizando "Object.setPrototypeOf()" ou "Construtor.prototype.metodo" assim como utilizamos para funções construtoras*/

//declarando uma classe

class Pessoa{
    //No caso das classes "class" o paramtros da função e definido dentro do contrutor da função diferente da função contrutora que os parametros são passados dentro da propria função 

    constructor(nome, sobrenome){ // passagem de parametros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){//definindo o metodo da classe
        //Observa-se que em "class" não precisamos utilizar o operador "this" para criar o metodo, no caso de classes os metodos criados são definidos automaticamente dentro do proprio protorype do objeto 

        console.log(`nome: ${this.nome} \nsobrenome: ${this.sobrenome}`);
    }
}

const p1 = new Pessoa('wallison', 'gregorio');

p1.falar();