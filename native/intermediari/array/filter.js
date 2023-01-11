/* Basicamente utilizamos a função (filter) para filtrar valores de um array com o intuito de gerar um novo array com esses valores filtrados 
para definirmos a função "filter" e e nescessario definirmos dentro dela uma função "callback", a função de callback definida dentro da função filter recebera 3 valores como parametros no automatico 
- valor =  basicamente esse parmetro corresponde as valores contido dentro do array que sera filtrado
- indice = esse parametro corresponde aos indices do array filtrado
- array = o ultimo parametro ele retorna o valor completo do array filtrado*/

/* basicamente a função (filter) tem como objetivo retorna um valor boleano ou seja (true - false) */

const numeros = [10, 20, 15, 1, 2, 3, 4, 35, 50, 45];

const nvNumeros = numeros.filter((valor, index, array) => { return valor <= 10;})

console.log(numeros);
console.log(nvNumeros);