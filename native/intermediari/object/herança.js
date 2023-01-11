/* Basicamente o padrão de herança consiste em criarmos uma construct function e utilizar ela como escopo para novos objetos , ou seja, basicamente a herança consite em criar uma função contrutora que servira de esqueleto para novos objeto, esse esqueleto possui atributos na qual os novos objetos instanciados receberão e tambem possui funcionalidades que poderão ser aplicada em novos objetos, ou seja, basicamente se trata de uma função com metodos definidos que poderão ser reutilizados em novos obejtos */

/* Como no exemplo a baixo onde criaremos uma função contrutora "produto" na qual recebera osatributos do produto e seus metodos e sera reutilizada na isntanciação de novos objetos como "camisa e caneca" */

// Esqueleto da função que sera herdada

function Produto(preco, nome){
    this.preco = preco;
    this.nome = nome;
}

//metodo privado "prototype" basicamente definimos os metodos da função esqueleto dentro do proprio prototype para que esses metodos sejam privados, ou seja, nesse caso esse metodos so ficarão visiveis para os objetos que herdarem a função contrutora esqueleto

Produto.prototype.aumento = function (valor){
    this.preco += valor;
};

Produto.prototype.desconto = function (valor){
    this.preco -= valor;
};

function Camisa(preco, nome, marca){

    //Basicamente ao utilizarmos o metodo "call" ele faz com que passamos os atributos da função contrutora "Produto" para dentro da função "camisa" ou seja, nesse caso não a á nescessidade de se passar esses atributos para dentro da função como ("thi.preco = preco;" "this.nome = nome;"), porem utilizando isso so lhe permitira acessar os atributos da função, para acessar os metodos da função e enescessario realizar outra funcionalidade 

    Produto.call(this, preco, nome); //função construtora "Camisa" herdando os atributos da função construtora "Produto"

    this.marca = marca;
}

//o metodo a baixo faz com que a função "Camisa" tenha o acesso aos metodos da função "Porduto" ja que os seus metodos estão ocultos dentro do prototype da função, nesse caso ao fazermos isso nos permite acessar os metodos privados da função, porem ao utilizarmos esse mecanismo isso faz com que a função que esteja recebendo os metodos do prototype de outra função tenha o seu contrutor alterado ou seja o contrutor da função estara apontando para a outra função 

Camisa.prototype = Object.create(Produto.prototype); //passando o prototype de uma função para outra 

Camisa.prototype.constructor = Camisa; //esse mecanismo faz com que o contrutor da função não fique apontando para outra função ao herdar os metodos 

//instanciando um novo objeto

const camisa = new Camisa(25, 'marba', 'adidas');
const blusa = new Camisa(50, 'regata', 'nike');

camisa.desconto(20);

console.log(camisa);

/* Uma vez que a função foi herdada e o seu prototype foi passado para a função que a herdou os metodos poderão ser sobrescrevido, ou seja, alterado sem afetar a função herdada "função esqueleto" 
EX:*/

Camisa.prototype.aumento = function (valor){  
    this.preco = this.preco + (this.preco * (valor / 100));
}

//observa-se que esse função ja foi definida porem a sua funcionalidade esta sendo alterada para os objetos dessa função

blusa.aumento(10);

console.log(blusa);