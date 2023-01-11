// Factory function (Função fábrica)
// Constructor function (Função construtora)


/* Basicamente as funções factory são similares ao POO ou seja o seu diferencial e que não utilizamos classes para poder gerar um novo objeto nesse caso todas as funcionalidades são definidas dentro de uma unica função, nesse caso definimos dentro de uma função um objeto dentro desse bloco de objetos definimos as suas funcionalidades nesse caso toda função definida dentro de um objeto e chamado de "metodo" */

/* Basicamente utilizamos a palavra "this" quando se tem a nescessidade de acessar uma variavel ou atributo que esteja definido fora do bloco de chamada ou seja ao utilizarmos o prefixo "this" isso faz com que o elemento fique fora do seu escopo e passa a pertencer ao escopo global 

EX : no caso de um metodo que esta tentando acessar um atributo do objeto que não foi passado como parametro porem foi definido dentro do corpo do objeto nesse caso pelo fato desse atributo não pertencer ao bloco de comando do metodo e nescessario utilizarmos o prefixo "this" antes da chamada do atributo/variavel para que o metodo possa ter acesso ao valor desse atributo/variavel assim como foi aplicado nos exemplos abaixo*/


/* No caso de funções factory assim como em classes de POO utilizamos o prefixo (get) para definir pro interpretador "JS" que esse metodo ira mostrar o valor e o prefixo (set) disendo que esse metodo ira fazer alguma alteração no valor assim como foi definido nos exemplos abaixo */

/* Ao utilizar o metodo "get" ele faz com que as chamadas dos metodos contidos dentro do objeto da função factory possam ser chamados como simples atributos do objeto ou seja ao utilizar o "get" quando for chamar o metodo ao invez de fazer a chamada tradicional do metodo "metodo()" podemos apeanas o chamar como se fosse um atributo/variavel "metodo" assim como foi aplicado no exemplo a baixo com o metodo "imc", observa-se que por se tratar de um metodo contido dentro do metodo get não houve a nescessidade de o declarar com a chamada tradicional pois o leitor de codigo não o interpreta esse metodo como uma função mais sim como um atributo do objeto, porem ao utilizar o metodo get em um metodo isso o faz se transformar em um metodo imutavel ou seja para alterar os seus valores e nescessario definir o metodo "set" para alterar os valores do metodo*/


function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' '); //o metodo "split" quebra a string de acorodo com o caracter definido dentro dele, nesse caso foi o espaço vazio 
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

