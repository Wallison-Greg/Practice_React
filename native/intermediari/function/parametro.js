/* Por se tratar de uma linguagem de tipagem fraca o javascript não acusara com tanta facilidade erros no codigo assim como nas linguagens de tipagem forte que ao ser detequitado um erro no codigo o programa/sistema para de ser executado, sendo assim mais facil de se trabalhar ja que uma vez detectazdo um erro no codigo o sistema não deixara de ser excecutado */

/* O ponto negativo desse mecanismo e que se torna mais dificio de se identificar os erros no codigo ja que o sistema continua funcionando mesmo avendo erros no codigo  */


/* com base nisso em caso de funções podemos utilizar alguns metodos para passagem de valores como parametro para uma função 
nesse caso podemos definir funções sem parametro a ser recebeido e mesmo assim passar um valor para o parametro ou seja por se tratar de uma linguagem de tipagem fraca o javascript não acusara erro, podemos tambem mais valores do que são exigidos pelo parametro que do mesmo modo não acusara erro no codigo
*/

/* passagem de valores sem parametros */

function nome (){
    return 'wallison';
}

console.log(nome('gisleny'));

/* Observa-se que foi denfinido dentro da função um valor e que essa função não recebe um parametro porem na chamada da função foi passado um valor como parametro, nesse caso o valor e ignorado */


/* passagem de multiplos valores */

function carro(cr1, cr2, cr3){
    return `${cr1} ${cr2} ${cr3}`;
}

console.log(carro('gol', 'golf', 'corola', 'palio', 'prisma'));

/* observa-se que foi passado varios valores como parametro porem so foram exibidos os valores que foram armazenados dentro do paramtro */

/* parametro array */

function pessoa(nome, idade, ...nomeCachorros){
    return {
        nome, idade, nomeCachorros
    };
}

console.log(pessoa('gisleny', 20, 'marley', 'luna', 'chocolate', 'bolinha', 'neguinha', 'marley.jr'));

/* Observa-se que foi passado varios valores como parametro porem os valores restantes foram todos armazenados dentro do ultimo parametro, isso foi possivel pois utilizamos o prefixo (...) antes do ultimo parametro, isso define que o parametro recebera os demais valores a serem inserido como paramtro */

/* Iniciando o parametro com um valor inserido */

const preco = (vl1, vl2) => {
    vl1 = vl1 || 0;
    vl2 = vl2 || 0;

    return vl1 + vl2;
}

console.log(preco(2));

/* Observa-se que definimos um valor pro parametrodentro da função ou seja caso nãoseja passado valor para a função como parametro o parametro receberar o valor definido dentro da propria função, utilizamos esse mecanismo para que a função não possa retornar valores (NaN) */

