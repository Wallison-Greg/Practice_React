/* prototype basicamente e um metodo que toda função construtora tem, esse metodo tem como objetivo armazenar certos abitos do objetos sem o deixar facilmente visive ou seja basicamente podemos deixar o prototipo do objeto dentro desse metodo no caso o prototipo do objeto são metodos que definem alguma funcionalidade para o objeto que possa ser usado em outros objetos quando forem instanciados */

/* Podemos passar a funcionalidades de um objeto para outro ou seja utilizando o "prototype" podemos definir um objeto como esqueleto ou seja nele definiremos as funcionalidades ou seja os metodos e utilizaremo esse objeto como um prototipo para os demais objetos, nesse caso as funcionalidades definidas dentro desse objeto poderão ser utilizadas por outros objetos */

/*ex*/

const ObjA = {
    chaveA: "A"
};

const ObjB = {
    chaveB: "B"
};

const ObjC = {
    chaveC: "C"
};

console.log(ObjA.chaveA);
console.log(ObjB.chaveB);
console.log(ObjC.chaveC);

/*chamando os valores contidos dentro do objeto */

console.log(ObjA.chaveB);

/*Tentando acessar os valores de outro objeto, observa-se que não foi possivel pois o objeto "A" não tem o acesso ao objeto "B" nesse caso e nescessario manipularmos o prototype do objeto sendo assim utilizando o metodo "Object.setPrototypeOf(obj1, obj2)", nesse caso esse metodo deve receber 2 objetos como parametros ou seja o primeiro objeto representa o objeto que receberar as propriedades do outro objeto, ja o segundo objeto represeta o objeto que servira como prototipo */

Object.setPrototypeOf(ObjC, ObjA);
Object.setPrototypeOf(ObjB, ObjC);

//Obs: o metodo "setPrototypeOf" so funciona se for aplicado em objetos ja definidos, ou seja, essa funcionalidade não se enquadra em funções construtoras

console.log(ObjC.chaveA);
console.log(ObjB.chaveC);
console.log(ObjB.chaveA);

/*Observa-se que apos definirmos o metodo "Object.setPrototypeOf" foi possivel passar valores de um objeto par outro objeto */

/* Observa-se que ao passamos o prototipo de um objeto para o outro esse objeto passa a ter acesso as funcionalidades do outro objeto sendo assim caso passamos o "porotorype" desse objeto para um terceiro objeto, esse objeto não so recebera as funcionalidades do objeto recebedio como as funcionalidades do primeiro objeto que teve o seu "prototype" passado ou seja seguindo o exemplo acima o objeto "C" recebe o prototype do objeto "a" e o objeto "b" recebe o prototype do objeto "c" sendo assim nesse caso o objeto "b" tem tanto o acesso ao prototype do objeto "a" como do objeto"c"*/

/* Em funções construtoras definimos funções que serão utilizadas em um ou mais objetos dentro do elemento "prototype" como os novos objetos instanciados receberão as mesma funcionalidades não ha necessidade para deixar o metodo publico ou seja facilmente visivel, nesse caso, em caso de metodos que serão utilizados repetidamente o colocamos dentro do elemento "prototype" para que asssim os novos objetos possam acessar assas funcionalidades sem que essa funcionalidades fiquem facilmente visiveis, para isso basta somente definirmos o metodo do objeto dentro do "prototype" do objeto 
*/

function Produto (preco){
    this.preco = preco;
}

Produto.prototype.desconto = (val) =>{
    this.preco = this.preco - (this.preco * (val / 100));
};

const caneca = new Produto(50);
caneca.desconto(20);
console.log(caneca);


