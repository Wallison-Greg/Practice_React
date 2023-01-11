/* Basicamente para juntarmos dois arrays em um unico so e nescessario utilizarmos a função (concat) com ela podemos juntar os valores em um array so  */

const idadeHomem = [18, 19, 20, 21];
const idadeMulher = [17, 22, 23, 24];

const idades = idadeHomem.concat(idadeMulher);

console.log(idadeHomem);
console.log(idadeMulher);
console.log(idades);

/* basicamente passamos para a variavel "idades" a função (concat) realizando a concatenação dos arrays e gerando um novo array */