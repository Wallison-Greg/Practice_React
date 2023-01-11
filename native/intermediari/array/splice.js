/* A função (splice) basicamente realiza a modificações basicas de um array como as funcionalidade das funções 
- pop()
- shift()
- unshift()
- push()
- delete */

/*Estrutura basica da função (splice) (indice, deletado, valores) 
basicamente como primeiro parametro sempre vamos definir o indice de origem, ja no segundo parametro vamos deinir a quantidade de itens que sera removido, caso não queira remover item nenhum basta colocar o valor (0) e no terceiro parametro colocaremos os valores que desejamos inserir dentro do array*/

/* utilizando a função (splice) com a funcionalidade da função "pop" */

const nomes = ['wallison', 'lucas', 'baltazar', 'edivaldo'];

nomes.splice(3, 1);

console.log(nomes);

/* nesse caso utilizamos a função (splice) para gerar a mesma funcionalidade da função "pop" ou seja nesse caso para realizar essa modificação e nescesario passarmos como primeiro parametro o indice que sera modificado e como segundo parametro a quantidade de elemto que sera removido do array  */

/* adicionando elemento com a função (splice) */

nomes.splice(2, 0, 'manuel');

console.log(nomes);

/* basicamente a função (splice) esta adicionando o elemento a partir do indice definido como parametro */

/* alterando elemento com a função (splice) */

nomes.splice(3, 1, 'nelio');

console.log(nomes);

/* basicamente nesse caso alteramos o valor do array ou seja trocamos o valor que estava contido no indice 3 deletando o antigo valor e acrescentando um novo no mesmo lugar */