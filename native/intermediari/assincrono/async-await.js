/*Basicamente utilizamos os metodos ("async", "await") como uma forma de reduzir o codigo da promise, ou seja, dependendo das quantidades de promeças a serem compridas dentro da promise o codigo acaba ficando muito grande e meio complexo de entender, para que não haja isso utilizamos o "async, await" como uma forma de construir a promise com o codigo limpo ou clea code */

function rand(min = 0, max = 3){ //função para gerar um numero randomico para o metodo "setTimeout"
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

async function executar(){

    try{
        const fala1 = await esperaAI('fala 1', rand());
        console.log(fala1);

        const fala2 = await esperaAI('fala 2', rand());
        console.log(fala2);

        const fala3 = await esperaAI('fala 3', rand());
        console.log(fala3);
    }catch(e){
        console.log(e);
    }
}

//observa-se que nesse caso a forma de chamar os valores e bem mais simples e facil de entender ja que não ha uma cadeia de valores assim como fica ao utilizar o metodo "then"

//basicamente o atributo "async" serve para definir q a função e assincrona ou seja que tem um pad~rao de execução e ser comprido e o atributo "await" serve para executar esses valores 

//obs: ao utilizar o "assync / await" não da pra chamar o metodo "catch" normalmente, ou seja, nesse caso e nescesario utilizar o tratamento de erro "try / catch" para definirmos um possivel erro
executar();

