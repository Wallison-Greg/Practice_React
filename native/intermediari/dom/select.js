/* Selecionando elementos "html" via "js"
para acessar os elemetos html via js podemos utilizar algumas formas distintas */

//selecionando o elemeto pelo o seu "id" utilizando o "getElementById"

document.getElementById('primeiro').classList.add('destaque'); 

//basicamente isso faz com que podemos acessar o elemento cujo o "id" foi passado para dentro do metodo
//basicamente o operador "classList" e utilizado para verificar as lista de classes contidas dentro do corpo da aplicação seja no html ou no css, nesse caso adicionamos no elemento com o "id" selecionado a classe "destaque" cujo tem uma formatação pre-definida dentro do proprio css

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//selecionando o elemento atravez do nome da propria tag utilizando o "getElementsByTagName"

const divs = document.getElementsByTagName('div');

const divsArray = Array.from(divs); //transformando a lista de elementos em array de elementos

divsArray.forEach(e => {
    e.classList.remove('destaque');
}) 

//nesse caso apos transformarmos a lista de elementos em um array de elementos utilizamos o "forEach" para percorrer os elementos selecionados e manipular aquele que desejamos que no caso foi removido a formatação "destaque" que foi inserida anteriormente

//podemos tambem gerar um array com a lista de elementos selecionados utilizando o metodo "spread operator" 

const arrDivs = [...divs]; //transformando a lista de elementos em array de elementos

arrDivs.forEach(e => e.classList.add('destaque')); //adicionando a formatação "destaque" para os elementos selecionados

//basicamente esse metodo consistem em selecionar os elementosatravez do proprio nome da tag, ou seja, nesse caso estamos passando os elementos selecionados atravez do proprio nome da tag para dentro da constante "divs" sendo assim podendo ser reutilizado a propria variavel em outra ocasião 

/*obs: ao selecionar os elementos atraves do proprio nome da tag o javascript trabalha de forma diferente em cima desses elementos, ou seja, pelo fato de poder selecionar uma o mais tags com o mesmo nome isso faz com que o javascript ao selecionar o elemtno crie uma lista dos elementos selecionados "HTMLColections". 

Para manipular esses elementos selecionados e ideal transformarmos essa lista de elementos em um array, sendo assim se tornando mais facil de se manipular os elementos */


//------------------------------------------------------------------------------------------------------------------------------------------------------------


/*selecionando os elementos atravez do nome da classe do elemento utilizando o "getElementsByClassName"*/

const classes = document.getElementsByClassName('ultimo');

const arrClass = [...classes];

arrClass.forEach(e => e.classList.remove('destaque')); //removendo a formatação "destaque" dos elementos selecionados

/*Basicamente esse metodo e similar ao "getElementsByTagName" pois ao utilizar ele para selecionar os elementos ele gerar um "HTMLColections", ou seja, uma lista de elementos ja que podemos ter uma o mais classes com o mesmo nome, nesse caso assim como no metodo de seleção "getElementsByTagName" que tivemos que gerar um array da lista de elemenos selecionados no caso da "getElementsByClassName" tambem tera a nescessidade de gerar um array de elementos */


//------------------------------------------------------------------------------------------------------------------------------------------------------------

/* selecionando os elementos atravez dos seletores css utilizando o "querySelector" */

document.querySelector('#primeiro').classList.remove('destaque');

//nesse caso foi selecionado o id "primeiro" e removido a lista de classes "destaque" desse id

/*no caso do "querySelector" ele seleciona o elemento porem a passagem de parametro do elemento que sera selecinado e similar a chamada de seletores do css, ou seja, caso queira selecionar o "id" do elemento e nescessario pasar o nome do id mas o seletor css ex : "#test", isso tambem se aplica em classes ex: ".teste", ou seja, de acordo o elemento que voce ira selecionar e nescessario passar o seletor desse elemento, basicamente utilizamos esse metodo para selecionar um elemento em expecifico */

//------------------------------------------------------------------------------------------------------------------------------------------------------------

/* selecionando os elementos atravez dos seletores css utilizando o "querySelectorAll"*/

const tag = seletor => {
    document.querySelectorAll(seletor).forEach(e => e.classList.add('destaque'));
}
const remov = seletor => {
    document.querySelectorAll(seletor).forEach(e => e.classList.remove('destaque'));
}
tag('div');
remov('[ws-atribut]'); // selecionando a partir de um atributo personalisado 

/* Esse metodo e similar ao "querySelector" o seu diferencial e que podemos utilizar ele para selecionar mais de um elemento, o seu diferencial dos demais seletore e que os seletores que selecionam mais de um elemento retornam um "HTMLColection", ou seja, uma coleção de elementos porem no caso do "querySelectorAll" ele retorna um "NodeList" nesse caso ão ha a nescessidade de se tranformar em um array pois o "NodeList" aceita o "forEach"

Obs: o "NodeList" tem acesso ao forEach porem não permite trabalhar com "map, filter ou reduce" para isso e nescessario o transformar em um array */

