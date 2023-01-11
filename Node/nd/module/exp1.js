/*Basicamente o module do Node e similar ao modulo do ES6, sendo assim utilizando os termos ("import" e "export"), porem o seu diferencia e na chamada desses termos

Basicamente existem algumas formas de exportar funcionalidade via Node.js*/

//Ex - 1 : metodo tradicional, basicamente esse metodo consiste em chamar o metodo "module" o metodo "exports" definir o nome do valor que sera exportado e passar o valor que sera exportado assim como foi definido no exemplo abaixo 

const nome = 'wallison';
const sobrenome = 'gregorio';
const idade = 22;

module.exports.nome = nome;

//Ex - 2 : esse metodo e similar ao metodo anterior porem utilizamos uma forma mais abreviada sem ouver a nescessidade de chamar o metodo "module"

exports.nome = nome;

//Ex - 3 : basicamente esse metodo consiste em exportar varias funcionalidade/valores de uma so vez sem ter que exportar valores por valores 

module.exports = {
    nome, sobrenome, idade
}

//nesse caso estamos exportando os valores das 3 variaveis de uma so vez
