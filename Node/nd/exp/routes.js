/*Basicamente por padrão de projetos utilizamos o arquivo "routes.js" para definir as rotas do nosso servidor, basicamente estamos utilizando modelos de projetos para organizar melhor os futuros projetos para facilitar na leitura e organização do codigo  */

//basicamente utilizamos os padrões de projetos para separarmos com melhor eficiencia o back-end - API - front-end

/*Utilizamos o arquivo "routes.js" para facilitar na definições de rotas do servidor, ja que se formos definir tudo em unico so arquivo o arquivo ficara grande de mais com muitas linhas de codigo 

para utilizarmos a routes e nescessario passar as dependencias do express para dentro do arquivo e chamar o metodo "Router()"

Basicamente a funcionalidade das rotas e fazer o roteamente da rota do servidor ou seja linka a rota com o endereço que o ususario deseja acessar, ele e bastante similar com o servidor "express" ja que a variavel "route" tem a funcionalidae similar a variavel "app"

para utilizar as rotas e ideal utilizar algum padrão de projeto como o "M-V-C" nesse caso as funcionalidades de cada rota do servidor sera definidas individualmente dentro do controller da aplicação assim como esta sendo aplicado na pasta "controllers"

Basicamente as funcionalidades definidas dentro dos endereçoes do servidor como ("app.get("/", (req, res) => {})") passarão a serem definidas dentro do controler, ou seja nesse caso nãoavera a nescessidade de criarmos a rota do servidor e definir suas requisiçoes, nesse caso as requisções/resposta serão definidas individualmente dentro do controler e depois serão exportadas para dentro do arquivo "routes.js" para depois serem passadas para o servidor*/

const express = require('express');
const route = express.Router();
const homeC = require('./controllers/homeController');

route.get("/home", homeC.home);

module.exports = route; //exportando a rota definida

//apos definirmos a rota e nescessario exportamos esse valor para dentro do servidor para assim o usuario poder ter acesso a sua requisição, apos exportar as funcionalidades da rota basta somente importamos essas funcionalidades para dentro do nosso servidor e utilizar as suas funcionalidades 

//apos importar as rotas definidas e nescessario definir dentro do servidor a usabilidade das nossas rotas utilizando o seguinte codigo definido dentro do arquivo "get.js"  

//code: app.use("nome da variavel q recebeu a importação do arquivo")

//observa-se que nesse caso definimos o servidor porem as funcionalidades do servidor foram definidas em um arquivo separado deixando assim o codigo mais limpo 