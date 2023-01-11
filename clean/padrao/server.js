require('dotenv').config();

const express = require('express'); //importando express
const app = express(); //utilizando o express
const routes = require('./routes'); //importando as rotas
const path = require('path'); //utilizando o caminho dedicado
const mongoose = require('mongoose'); //importando o mongoose

mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log('base de dados conectada'); 
        app.emit('pronto');
    });//gerando a conexão com a base de dados 

app.use(express.urlencoded({extended: true}));
app.use(routes);// acessando as rotas 
app.use(express.static(path.resolve(__dirname, 'public'))); //acessando a pasta publica

app.set('views', path.resolve(__dirname, 'src', 'views')); //acessando as views do nosso projeto
app.set('view engine', 'ejs'); //acessando as engines da nossa view

app.on('pronto', ()=> {
    app.listen(3330, () => {
        console.log('servidor conectado');
    }); //porta de acesso
}); //verificando se a base de dados foi conectada antes de inicializar o servidor 

/*Obs: para utilizar as engines na view e nescessario instalar os pacotes dela utilizando o seguinte codigo 

code: npm i ejs

Obs: caso queira conectar primeiro da nabase de dados antes de inicializar o servidor e nescessario passar a porta do servidor para dentro do metodo "app.on" nesse caso esse metodo recebera um gatilho ou seja tudo que estiver dentro desse metodo so sera executado apos o gatilho ser acionado ou sena nesse caso o servidor so sera inicializado apos a conexãop com a base de dados for finalizada */

/*Obs: e ideal conectarmos primeiro a base de dados antes de inicializarmos o servidor, sendo assim carregaremos as informações antes do sistema funcionar 

Obs: para gerar uma conexão com a base de dados segura e ideal colocarmos a conection-string dentro de um arquivo externo e utilizarmos o dotenv para receber essas informações o arquivo não pussi nome porem a sua extenção termina com ".env " nesse caso não sera necessario definirmos uma variavel para a connection-string ja que o seu valor foi definido dentro do dotenv, nesse caso para passarmos o valor par dentro do mongose e nescessario passar o seginte codigo "process.env.nome-da-chave", basicamente e nescessario chamar os dois metodos "process, env" a passar o nome da chave que foi definido dentro do arquivo ".env" que recebe a connection-string nesse csao estaremos passando o valor da conexão de uma forma mais segura */