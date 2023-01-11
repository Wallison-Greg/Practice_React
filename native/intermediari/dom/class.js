/* acessando classes via js */

/*Sabemos que podemos acessar as classes via js por diversos tipos diferentes, porem ideendente de qual forma foi escolhida para acessar a classe, para manipular essa classe temos que manipular o operador "classList" */


/*Adicionando classes a um elemento utilizando o "classList" */

const div = document.querySelector('div').classList

div.add('destaque'); 

// com o classList temos o acesso ao metodo "add()" com ele podemos atribuir novas formatações a um elemento apenas passando o nome da classe que esta recebendo essa formatação, ou seja, nesse caso estamos passando para dentro do elemento a classe "destaque" que possui uma formatação ja definda dentro do css

/*Removendo classes de um elemento */

div.remove('destaque'); 

// similar ao metodo "add" o metodo "remove" tem o papael de remover a classe definida em um elemento 

/*Utilizando o metodo "toggle" */

div.toggle('destaque');

// basicamente esse metodo ira verificar se o elemento possui a classe definida caso tenha ele ira remover a classe caso contrario ele ira adicionar a classe