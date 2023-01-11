/* Basicamente um array e uma variavel capaz de armazenar varias informações, no geral ela e utilizada para armazenar varias informações do mesmo tipo como um array somente com elementos do tipo string ou somento com o tipo numerico*/

/* Estrutura basica de um array */
/* basicamente um array e uma varivael que recebe varios valores dentro de um cochete ([]) */

const nomes = ['wallison', 'joao', 'lucas'];

/* Podemos manipular um array de varias formas tanto inserir novos valores sem mexer nescessariamente em sua estrutura base, como podemos deletar valores, alterar valores, mapear valores ou ate mesmo filtrar valores de um array para outro*/

/* inserindo valores em um array */

nomes.push('gisleny');

console.log(nomes);

/* Observa-se que nesse caso utilizamos a função (push) para inserir um novo elemento dentro do array */

/* deletando itens do array */

delete nomes[3];

console.log(nomes);

/* nesse caso utilizamos o prefixo (delete) e passamos o indice do valor que queriamos deletar */

/* alterando valores de um array */

nomes[3] = 'gabriel';

console.log(nomes);

/* Observa-se que nesse caso alteramos o item do array ou seja como tinhamos deletado o item que estava contido no indice desejado esse array ficou com um espaço vazio nesse caso alteramos isso inserindo um novo valor */

/* deletando o ultimo item do array */

nomes.pop();

console.log(nomes);

/* Nesse caso utilizamos a função (pop) para remover o ultimo elemento do array */

/* deletando o priemeiro elemento do array */

nomes.shift();

console.log(nomes);

/* nesse caso utilizamos a função (shift) essa função e similar a função "pop" o seu diferencial e que ao invez de deletar o ultimo item deletamos o primeiro item */

/* adicionando elementos no inicio do array */

nomes.unshift('wallison');

console.log(nomes);

/* basicamente utilizamos a função 'push' para podermos inserir um novo elemento no array nesse caso o elemento e inserido no final do array, caso queira inserir o elemento no inicio do array utilizamos a função (unshift)*/

/* convertendo "string" e array */

const carro = 'gol palio celta';

const carros = carro.split(' ');

console.log(carros);

/* Observa-se que transformamos uma string em um array, nesse caso aplicamos a função (split) basicamente essa função faz o elemento quebrar de acordo com o caracter definido dentro dela ou seja definimos a função "split" com o caracter de "espaço" ou seja cada espaço contido dentro da string sera quebrado assim como foi aplicado no exemplo acima */

/* transformando um array em uma string */

const tipoCarros = carros.join(' ');

console.log(tipoCarros);

/* observa-se que transformamos o array "carros" em uma string nesse caso utilizamos a função (join), basicamente essa função e similar a função "slpit" ja que ele aplica a modificação de acordo com o caracter definido dentro da função ou seja nesse caso utlizamos os "espaços" */

/* passagem de valores de um array para outro */

/* se passarmos o valor de um array para outro como referencia, isso faz com que as alterações feitas em qualquer um dois array sera refletida no outro  */

const animais = ['elefante', 'leão', 'tigre'];
const animais1 = animais;

/* observa-se que foi passado o valor do array "animais" para dentro da contante "animais1" nesse caso as alterações feitas em qualquer um dos arrays sera refletida em ambos  */

animais1.pop();

console.log(animais);
console.log(animais1);

/*observa-se que foi alterado o valor apenas na constante porem a alteração foi aplicada para ambos os array, isso acontece pois passamos os valores do array por referencia, para que esse erro não ocorra e nescessario utilizarmos o operador 'spread' como parametro do array */

const peixes = ['pintado', 'piranha', 'cachorra'];
const peixes1 = [...peixes];

peixes1.pop();

console.log(peixes);
console.log(peixes1);

/* Observa-se que ao utilizarmos o metodo 'spread' como parametro na passagem de valores ao alterar o valor em um array esssa alteração não se reflete no outro array */