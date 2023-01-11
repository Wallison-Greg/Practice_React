/* SetInterval e SetTimeout */

/* Basicamente utilizamos a função (setInteval) que se tem a nescessidade de se executar algum comando em um espaço de tempo definido ou seja, caso tenha a nescessidade de se executar alguma funcionalidade varias vezes sem esta chamando essa funão utilizamos a função (setInterval) para chamar a funcionaliade a ser executada */

/* EX: setInterval */

const date = () =>{
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const mostrar = () =>{
    console.log(date());
}

setInterval(mostrar, 1000);

/* Basicamente para se declara a função (setInterval) devemos passar 2 valores como parametro 
1º a função a ser chamada 
2º o tempo que essa função sera executada
*/

/* Ja a função (setTimeout) e similar a função (setInterval) o seu diferencial e que ela so executa o codigo 1x ja a (setInterval) executa varias vezes de acordo com o intervalo de tempo definido, ou seja utilizamos a função (setTimeout) quando se tem a nescessidade de se executar uma funcionalidade 1x de acordo com o tempo definido a declaração da função e similar a do (setInterval) ja que temos que passar apenas 2 valores como parametros */

setTimeout(mostrar, 1000);

/* Basicamente utilizamos essa função quando estamos trabalhando com a (DOM) ou seja executar uma funcionalidade apos o usuario clicar em algo com o tempo definido */

