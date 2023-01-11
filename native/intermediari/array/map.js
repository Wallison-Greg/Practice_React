/* A função (map) e similar a função "filter" o seu diferencial e que ao invez de apenas filtrar os valores com a função "map" podemos tambem alterar os valores não do array de origem mas sim do novo array gerado, nesse caso a função "map" tambem recebe uma função de callback com 3 parametros */

/* ou diferencial da função "filter" para a "map" e que com a função "filter" podemos alterar o tamanho do array ou seja utilizando a função "filter" o array pode ter o seu tamanho original ou reduzido ja com a função "map" ele sempre permanecera com o tamanho do array original */

const nomes = [
    {nome: 'wallison', idade: 21, peso: 60},
    {nome: 'lucas', idade: 21, peso: 60},
    {nome: 'baltazar', idade: 27, peso: 60},
    {nome: 'manuel', idade: 28, peso: 60},
];

const nome = nomes.map((valor, index, array) => {
    return valor.nome;
});
const idade = nomes.map((valor, index, array) => {
    delete valor.nome;
    return valor;
})
const ident = nomes.map((valor, index, array) => {
    valor.id = index;
    return valor;
});

console.log(ident);
console.log(idade);
console.log(nome);


const numbers = [11, 50, 22, 30, 25];

const dobro = numbers.map((valor)=>{
    return valor += valor;
});

console.log(dobro);