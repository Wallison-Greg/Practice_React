/*pegando o modulo do "path" do webpack */

const path = require('path'); //basicamente estamos importando um arquivo para dentro do webpack "path"

//iremos utilizar não so em webpack mas tambem em node os metodo "require" para importar arquivos e utilizar suas funcionalidades e o metodo "module.exports" par exportar funcionalidades para outros arquivos 

module.exports = {//basicamente iremos exportar as configurações do webpack

    //basicamente utilizando o ("mode:'development'") estamos definindo que o projeto tera o modo de desenvolvedor ou seja o codigo não sera incurtado, nesse caso a leitura do codigo continuara tendo a mesma velocidade, mas caso queira ganahar mais desempenho podemos utilizar o "mode" recebendo o valor "", com esse valor ele ira encurtar o codigo reduzindo o maximo possivel 

    mode: 'development',
    entry: './src/index.js', //acessando o arquivo de entrada do webpack
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), //acessando as pastas "public, assets e js"
        filename: 'bundle.js'
    }, 
    module: {},
    devtool: 'source-map'
    //apos isso devemos criar um arquivo de entrada do webpack que estara contido dentro da pasta "src"
};