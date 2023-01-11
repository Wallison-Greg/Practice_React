/* defineProperty basicamente com esse metodo podemos definir um atributo em expecifico de um objeto para receber sertos tipos de formatações ou seja com ele podemos definir se um atributo em expecifico poderar ser viasualizado, modificado ou  apagar o atributo do objeto

Basicamente esse metodo funciona similar ao metodo (Object.freeze) o seu diferencial e que o etodo "freeze" faz com que o objeto em si não possa sofrer nenhum tipo de alteração ja com o metodo "defineProperty"  podemos definir o atributo que não sofrera as alterações*/

//função contrutora de objetos

function Pessoa(nome, idade, peso){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
}

const p1 = new Pessoa('wallison', 21, 60);

Object.defineProperty(p1, 'idade', {
    enumerable: true, //basicamente esse elemento faz com que o atributo possa ser exibido
    value: idade, //nesse elemento definimos o valor que sera atribuido para o atributo do objeto
    writable: false, //basicamente esse elemento define se o atributo podera ser alterado ou não "caso seja = false, nõa podera ser alterado"
    configurable: false,//basicamente definimos nesse elemento se ele pode apagar o atributo do objeto ou não 
});

p1.idade = 22;

delete p1.idade;

console.log(p1);

/* Observa-se que foi definido o metodo (Object.defineProperty) e apos esse metodo foi tentado realizar a alteração do valor do atributo e a exclusão do atributo porem isso não foi possivel pois o metodo impediu essa funcionalidade */

