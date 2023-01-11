/* Declarando uma função */

/* Basicamente existem 3 formas de se declarar uma função 
1º utilizando o prefixo (function)
2º passando o prefixo (function) para uma variavel 
3º arrow function */

/* function husting */

/* Esse tipo de declaração de função e utilizado quando se tem a nescessidade de chamar a função antes mesma dela ser declarada */

nome();

function nome(){
    console.log("wallison");
}

/* Observa-se que a função foi chamada antes mesmo dela ser declarada */

console.log("##############")

/* function expression */

/* Basicamente esse tipo de declaração consiste em salvar a funcionalidade de uma função dentro de uma variavel */

const sobreNome = function (){
    console.log('silva')
}

sobreNome();

console.log("##############")

/* arrow function */

const finalNome = () =>{
    console.log("gregorio")
}

finalNome();

console.log("##############")

/* Podemos passar uma função como parametro para outra função sendo assim passando as suas funcionalidades para outra função ou sendo executada */

const nomeCompleto = (nome, sobreNome, finalNome) => {
    nome();
    sobreNome();
    finalNome();
}

nomeCompleto(nome,sobreNome,finalNome);