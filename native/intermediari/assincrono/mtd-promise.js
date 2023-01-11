/*Em "promises" temos alguns metodos uteis que podem facilitar na manipulação do codigo*/

//1º : Promise.All = basicamente esse metodo e utilizado para trazer um array cons os valores que serão executado dentro da promise, ou seja, basicamente com ele fica mais facil executar os valores pois não ah a nescessaide de se utilizar varios metodos "then" para definir a chamada dos valores ou seja nesse caso utilizaremos apenas 1 metodo "THEN" retornando o valor final


function rand(min, max){ //função para gerar um numero randomico para o metodo "setTimeout"
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject) => { //definido o codigo que sera executado pela promise

        if(typeof msg !== 'string') reject('bad value'); //ira acusar um erro caso as condições da promessa não seja comprido 

        setTimeout(()=> {
            resolve(msg);//ira executar o codigo caso as condições da promessa seja compridas
        }, tempo);
    })
}

const promise = [ //array que ira trazer os valores a serem executados pela promise na ordem certa
    esperaAI('valor 2', rand(1, 3)),
    esperaAI('valor 3', rand(1, 2)),
    esperaAI('valor 4', rand(1, 3))
];

Promise.all(promise).then(valor => {
    console.log(valor);
}).catch(e => {
    console.log(e);
})

/*observa-se que ao utilizarmos o metodo util "Promise.all" não tivemos a nescessidade de chamar varios metodos "then" para definir a ordem de chama, nesse caso e ideal utilizar esse metodo de chamada quando se tem as funcionalidades ja definidas dos valores a serem chamados */

// 2º : Promise.race = basicamente esse metodo e similar ao metodo "Promise.all" porem o seu diferencia e que ele retorna apenas o primeiro valor a ter a promeça comprida, ou seja, ele ira retorna o primeiro valor a ser executado

Promise.race(promise).then(valor => {
    console.log(valor);
}).catch(e => {
    console.log(e);
})