/* Acessando os atributos dos elementos html via js */

/* Basicamente podemos acessar os valores dos atributos dos elementos html como "src" "name" "type" etc..*/

//Acessando os atributos dos elementos utilizando o "getAttribute"

const img = document.querySelector('img')

let attr = img.getAttribute('src');
let tt = img.getAttribute('teste');

console.log(attr);


/* Basicamente o metodo "getAttribute" tem como objetivo retornar o valor do atributo desejado do elemento selecionado */

/* Basicamente utilizamos os metodos de acessar atributos para ("pegar os valores dos atributos", "mudar os valores dos atributos" e "alterar o proprio atributo") */

//Mudando o atributo do elemento utilizando ""

tt.setAttribute('teste', 'now' );
