/*Basicamente o "webpack" tem uma funcionalidade similar ao "babel" ou seja comele podemos gerar novos codigos legiveis para navegadores antigos, basicamente ele torna mais facil a manipulação so babel */

/*Para utilizar o webpack e nescessario instalar algumas dependencias como "npm" e o proprio babel assim com foi feito na pasta "babel", temos apenas que acressentar mais um codigo de instalação para poder link o babael ao webpack 

code: babel-loader

temos que tambem instalar as dependencias do webpack utilizando o seguinte codigo 
code: webpack webpack-cli

Para utilizar os utimos recursos do JS dentro do babel e nescessario instalar tambem as seguintes dependencias
code: regenerator-runtime core-js@2

Podemos pasar todas as dependencias a serem instaladas todas de uma vez para que o editor de codigo baixe tudo de uma so vez, ou seja sendo assim o codigo para baixar todas as dependencia tanto do babel como o link entre o babel e o webpack e o proprio webpack ficaria  da seguinte forma 

code: npm install --save-dev @babel/cli @babel/preset-env @babel/core babel-loader webpack webpack-cli regenerator-runtime core-js@2*/


/*Apos baixar todas as dependencias nescessarias precisamos criara o arquivo de configuração do "webpack" para isso e nescessario criar um arquivo com o nome ("webpack.config.js")
Obs: e extremamente importante criar o arquivo exatamente comesse nome pois caso contrario ele não ira funcionar */


/*Obs: uma das vantagens do webpack e que com ele podemos reduzir o codigo feito, nesse caso a leitura do codigo ficara mais rapida para os navegadores trasendo um melhor desempenho nos sistemas, e tambem poderemos trabalhar com modulos ou seja ao invez de definir a funcionalidade do sistema em um unico script poderemos separar as funcionalidades e esportar eles para um unico arquivo "index" nesse caso o arquivo principal ficara responsavel apenas para receber as funcionalidades externas dos demais scripts

Por boas praticas e ideal inserirmos os scripts externos dentro de uma pasta "src" basicamente essa pasta tem como objetivo de armazenar scripts, para deixar o seu sistema mais organizado ainda podemos colocar a pasta "src" dentro de uma pasta chamada "assets" essa pasta e responsavel por guardar todos os arquivos do sistema, sendo assim o modelo de projeto ideal ficara da seguinte forma

assets
------------- dentro da pasta assets
    src: scripts e suas funcionalidades
    view: arquivos de visualização html
    style: arquivos de formatação css
------------
idex.html: pagina principal
*/