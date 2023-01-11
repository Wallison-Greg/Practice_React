/*Basicamente utilizamos a "primisse" par definirmos um padrão que o codigo seguira para ser executado, ou seja, utilizamos a promisse quando utiliza-se apis externas e não sabemos como as informações chegarão para nos, ou seja, nesse caso definimos um padrão "promeça" que definira como receberemos esses valores */

/*A definição de uma "promisse" e similar a estrutura de uma classe ou uma construct function, ou seja, e nescessario utilizarmos o atributo "new", a promisse deve receber dentro dela uma função "callback" que tera dois parametros dentro dela ("resolve", "reject") */

/*Basicamente a ideia da promisse e similar a estrutura condicional "if, else" e com a estrutura de erro "try, catch" ja que nele precisamos definir uma promessa a ser comprida e temos que definir um erro*/

//EX:

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

esperaAI('fala 1', rand(1, 3)).then(responde => { //basicamente definimos as promeças "ordem de chamada" detro do metodo "then"

    console.log(responde); //basicamente o parametro "responde" retornara o valor contido dentro do parametro "resolve"

    return esperaAI('fala 2', rand(1, 3));//definindo o proximo valor a ser chamado
}).then(responde => {
    console.log(responde);
    return esperaAI(123, rand(1, 3));
}).then(responde => {
    console.log(responde);
}).catch(e => {
    console.log(e); //basicamente o parametro "e" retorna o erro definido dentro do metodo "reject" da promise
});


/*Basicamente definimos o padrão de chamada dos valores dentro do metodo "then" ou seja dentro dele definimos a ordem que os valores serão executado, ou seja,  assim como no exemplo assima, definimos o primeiro "then" que executara o primeiro valor e logo em seguida retornamos o proximo valor a ser executado, nesse caso quando se chamar o then novamente ele ira retornar o segundo valor*/
