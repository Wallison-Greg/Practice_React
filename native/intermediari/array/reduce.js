/* basicamente utilizamos a função (reduce) para pegar todos os valores de um array e gerar apenas um unico valor como pegar uma lista de numeros e trazer a quantidade total de numeros dessa lista */

/* A estrutura da função (reduce) e similar a das funções (map - filter) o seu diferencial e que na função callback ela recebe um parametro a mais que representa o "acumulador", por conta disso e nescessario atribuirmos um valor inicial para esse acumulador dentro da função "reduce" esse valor e definido fora do bloco da função callback*/

/* basicamente esse parametro acumulador e o elemento responsavel por juntar todos os valores do array ou seja somar todos os valores */

const numeros = [1, 5, 10, 25, 40, 85, 30, 12];

const tot = numeros.reduce((acumulador, valor, index, array) =>{
    acumulador += valor;
    return acumulador;
}, 0);

console.log(tot);

/* basicamente o reduce somou o valor do acumulador mais o valor do array isso com cada elemento do array trazendo o resultado final */