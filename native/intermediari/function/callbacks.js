/* Basicamentes as (callbacks) são funções que são executadas quando alguma ação ocorre
em resumo basicamente um fução de callback e passada como parametro parta outra função ou seja uma função que e definida dentro do parametro de outra função */

/* As (callbacks) são funções definidas dentro de um função tanto como no seu bloco de comando ou passadas como parametro de uma função 
basicamente a callback eu uma função que quando se cumpri um requisito da função em que ela foi definida e disparado o gatilho para a chamada da fução callback

Basicamente essa função e bastande utilizadas em chamadas de arrays pois e no caso da utilização do laço (foreach) e nescessario definirmos uma função callback passada como parametro dentro do laço */

/* Ex: */

const nome = ['wallison', 'joao', 'gisleny']

let retNome = (nome, indice) => {
  console.log(`${indice + 1} - ${nome}`);
}

nome.forEach(retNome);

/* Observa-se basicamente definimos um array e geramos uma função para retornar os valores do array nesse caso passamos essa função como parametro pro laço (foreach) para ele realizar a chamada dos valores do array nesse caso a função passada para dentro do laço e uma função (callback) */

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}
