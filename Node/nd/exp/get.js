/*Basicamente utilizamos o express para criarmos servidores web gerando a conexão entre back-end - APIs - front-end
para utilizarmos o express e nescessario instalar os pacotes do NPM, apos isso e nescessario baixar os pacotes do express utilizando o seguinte codigo 

code: npm i express

para utilizar o express basta importar as propriedades dele para dentro do arquivo desejado*/

const express = require('express'); //importando o express
const app = express();
const routes = require('./routes'); //importando as rotas

//Obs : para trabalharmos encima das funcionalidades do express e nescessario utilizarmos uma variavel para executar o express que nesse caso e comum ser utilizado a variavel "app"

//basicamente o express e responsavel por definir as rotas a serem executadas nos sites e os seus tipos, ele e bastante aplicado quendo se temos conexões com banco de dado, nesse caso o CRUD

//o CRUD e definido por algumas funcionalidades ("create", "read", "update", "delete")

//basicamente cada funcionalidade do CRUD possi o seu metodo de conexão express com o servidor, Sendo assim ("creat: POST", "read: GET", "update: PUT", "delete: DELETE"), basicamente os metodos de conexões definem como as informações serão passadas para a URL do servidor 

//basicamente os metodos de conexões são definidos das seguintes formas ("POST: criar", "GET: ler", "PUT: atualizar", "DELETE: deletar")

//Nesse arquivo trabalharemos com o metodo "get" que tem como objetivo de ler alguma informação 

//para chamar o metodo get e bem simpes, basicamente ele ira precisar de 2 parametros ("rota a ser lida" e "função calback"), podemos utilizar mais parametros tambem 

//Obs: a função dentro do metodo "GET" tera que resceber 2 parametros ("REQ: requisição", "RES: resposta"), basicamente sempres que o usuario fizer uma requisição o parametro "res" tera que trazer alguma resposta para o usuario 

//OBS: para executarmos os metodos do servidor e nescessario definirmos a porta de execução do sistema, para isso e nescessario chamarmos o metodo "listen" e passar o valor da porta que sera utilizada 

//definindo o metodo GET

app.get('/', (req, res) => { //definindo o metodo get
    res.send('ola jovem gafanhoto');
})

app.get('/user', (req, res) => {
    res.send('vini, vid, vici');
})

app.use(express.urlencoded({extended: true}));
app.use(routes);

app.get('/endereco/:parametro?', (req, res) => {
    console.log(req.params.parametro);
    console.log(req.query);
    console.log(req.body);
    res.send(req.params.parametro); //pegando o valor do parametro 
})

app.listen(3000); //definindo a porta do servidor 

//para executar o servidor basta utilizar o seguinte codigo no terminal : node "nome do arquivo servidor"
