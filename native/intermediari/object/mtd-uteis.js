/* Em casos de objetos que sejam passados os seus valores para outra variavel, nesse caso tanto a mudança no objeto origem como no novo objeto sera aplicada para ambos os lados */

const pessoa = { nome: 'wallison', idade: 21};

//const outro = pessoa;

//EX: espread operator

const outro = { ...pessoa }

outro.nome = 'lucas';

console.log(pessoa);
console.log(outro);

/* Observa-se que o no novo objeto foi-se alterado o valor do atributo "nome" e o mesmo foi alterado no objeto origem, nesse caso caso queira fazer a alteração em um objeto sem influenciar no objeto origem e nescessario utilizarmos o metodo "spread operator" basicamente esse metodo consitem em chamar os valores do objeto dentro de um objeto vasio utilizando (...) */

/* Ou seja sempre que for passar o valor de um objeto para outro sem fazer alterações no objeto origem e nescessario passar esse objeto por referencia com o metodo "spread operator" */

/* podemos utilizar o metodo "object.assign" ele passa os valores de um objeto para outro assim como o metodo "spread operator" o seu diferencial e que podemos definir novas funcionalidade dentro dele  

para definirmos o "object.assign" podemos utilizar 3 parametro diferentes 
1º um objeto vasio que sera responsavel por gerar um novo objetos com os valores recebidos
2º os  valores a serem passados para o novo objeto
3º um objeto com novas funcionalidades a serem passada para o novo objeto*/

const pessoa2 = Object.assign({}, pessoa, {peso: 60});

console.log(pessoa2);