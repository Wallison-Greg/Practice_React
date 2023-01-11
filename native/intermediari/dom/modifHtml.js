/* Como cimos anterior mente referente ao conteudo sobre a "Dom" podemos manipular os elementos/atributos html via js utilizando varias formas distintas, com base nisso podemos tambem via "js" gerar novos elementos "trags" html e setar valores para esses novos elementos */

const bd = document.querySelector('body'); //selecionando o elemento

const div1 = document.createElement('div'); //gerando um novo elemento

div1.classList.add('destaque'); //aplicando formatações no novo elemento

div1.innerHTML = 'inserindo valores' //setando um valor para o novo elemento

const pg = document.createElement('p');
pg.innerHTML = 'paragrafo';

const div2 = document.createElement('div');
div2.appendChild(pg);

//basicamente o metodo "appendChild" faz com que o elemento passado como parametro seja inserido dentro do elemento que esta chamando o proprio metodo, ou seja, nesse caso a variavel "div2" que tem como objetivo criar um elemento do tipo "div" esta recebendo dentro dele a variavel "pg" que tem como objetivo criar o elemento "p"

//obs: com esses codigos apenas geramos novos elementos e passamos valores para eles, para que esses elementos sejam visiveis para o usuario e nescessario passar eles para dentro do corpo da aplicação ou seja para dentro do "body" que foi selecionado dentro da variavel "bd"

bd.appendChild(div1);
bd.appendChild(div2);

bd.removeChild(div1); //esse metodo e similar ao "appendChild" o seu diferencial e que ao invez de adicionar o elemento ele remove o elemento selecionado 