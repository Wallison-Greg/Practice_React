/*Basicamente estamos iniciando o conteudo de model "base de dados" basicamente o model no padrão de projetos e utilizado para definir as bases de dados do nosso projeto, ou seja, e responsavel por realizar a conexão com o banco de dados e definir as movimentações do mesmo 

Para definirmos uma conexão segura sem que haja furo ou vazamento da senha e login da nossa base de dados e nescessario indexalas em um arquivo externo que sera responsavel de guardar as nossas conexões com a base de dados, para isso e nescessario instalarmos as dependencias do arquivo dotenv utilizando o seguinte codigo 

code: npm i dotenv*/


/*Para trabalharmos com a base de dados mongoDB e nescessario instalarmos as dependencias do "mongoose" para podermos manipular a base de dados do nosso projeto, para isso basta utilizar o seguinte codigo 

code: npm i mongoose*/

//EX : exemplo basico de criação de base de dados e schema
const mongoose = require('mongoose');

const DbSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: Number
}); //criando o schema 

const DbModel = new mongoose.model('user', DbSchema); //cirnado a model "base de dados"

module.exports = DbModel; //exprotando a base de dados 


/*Obs: por padrão de projeto e ideal exportar as funcionalidades do model para o controle para assim ele poder trabalhar em cima dele, nesse caso garantimos uma maior segurança ja que o ususario não tera a visibilidade do model  */