/* Tratamento de erro */

/*
Basicamente utilizamos o (try - catch) para fazer o tratamento do erro ou seja atravez dele conseguimos idenficar o erro no codigo com mais facilidade ja que definimos o tipo de erro dentro de sua estrutura 

O (try - catch) e utilizado em codigos mais complexos onde se tem um alto risco de existir um erro, sendo assim definimos um tratamento de erro para ficar mais facio a localização do erro e sabermor do que se trata o erro 

*/

/* Estrutura do (try - catch) */

try{
    console.log(nome)
}
catch(err){
    console.log(`erro identificado ${err}`);
}

console.log("###")

/* Basicamente no bloco (try) definimos o codigo que sera examinado ou seja dentro desse bloco que o sistema ira identificar o erro caso haja o comando caira no bloco (catch) nele definimos a mensagem de erro que sera mostrada no terminal sendo assim ficando mais facilde se identificar e compreender o erro, nesse bloco e ideal não mostrarmos o erro pro usuario ou seja nesse caso podemos desenvolver alguma solução para aquele erro dentro desse bloco ou passar o erro para alguma base de dados para podermos solucionalo depois*/

/* no bloco (catch) podemos tambem alterar o nome do erro definido ou seja definir um nome personalisado pro erro, para isso e nescessario definirmos uma função que tera a sua funcionalidade verificada pelo bloco (try) e dentro dessa função definirmos uma nova mensagem de erro atavez do atriubuto (throw new erro) */

const calc = (a, b) =>{
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw new Error ('insira valores numericos');
    }
    return a + b;
}

try{
    console.log(calc(1, '2'))
}catch(err){
    console.log(err)
    console.log("valor inserido invalido")
}

/* Observa-se que definimos o parametro (throw) declarando uma nova mesagem de erro dentro da função, nesse caso quando a função for chamada e cair no erro a mesagem definida dentro dela sera exibida */

/* Ou seja nesse caso podemos definir uma esagem para ser apresentada para o usuario e passar a mensagem de erro para uma base de dados para que os desenvolvedores possam identificar o erro  */