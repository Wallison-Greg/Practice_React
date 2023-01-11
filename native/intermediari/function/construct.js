/* Basicamente essa função e similar a fução "factory" ou seja elas são utilizadas para gerar novos objetos, o seu diferencial e que a função factory e uma funçaõ que tem como objetivo retornar um objeto, ja a função construtora ja função construtora gera um objeto por si so */

/* a inicialização da função contrutora por via de regra deve ser declarada com a primeira letra em "Maiusculo", o seu diferencial tambem e que a cada novo objeto gerado e nescessario utilizar o prefixo "new" */

// EX

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('wallison', 'gregorio');
console.log(p1)

/*O seu outro diferencial e que a função contrutora por não ser definida dentro de um objeto não tem a nescessidade de se declarar como se fosse atributos ou metodos de um objeto sendo separados por "," */