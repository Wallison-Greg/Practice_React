/*Basicamente o module do Node e similar ao modulo do ES6, sendo assim utilizando os termos ("import" e "export"), porem o seu diferencia e na chamada desses termos

Basicamente existem algumas formas de importar funcionalidade via Node.js*/

//O diferencial do module em Node.js e o fato de podermos importar o modulo por completo sem ouver a nescessidade de chamar individualmente os elementos que serão importados 

//Ex - 1 : utilizando o metodo de import a baixo, basicamente teremos acesso a todas as funcionalidade exportadas 

const module = require('./exp1');

console.log(module);

//Ex - 2 : podemos importar apenas elementos unicos defindo os na hora de importar assim como foi definido no exemplo a baixo, nesse caso importamos apenas o elemento nescessario e não o modulo por inteiro 

const md2 = require('./exp1').nome;

console.log(md2.nome);

//Ex - 3 : podemos tambem atribuir funcionalidades exportadas para dentro de variaveis para facilitar a chamada

const name = module.nome;

console.log(name);


/*Em module no Node.js temos 2 variaveis que facilitam na chamada do caminho do arquivo 
1º __filename : nome do arquivo
2º __dirname : nome da pasta do arquivo  */