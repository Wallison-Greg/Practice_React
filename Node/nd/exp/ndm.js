/*basicamente utilizamos o "Nodemon" para starta o server, ou seja, nesse caso ao utilizar o express para iniciar o servidor temos sempre que utilizar o comando "node 'nome do servidor'" para o inicializar e toda atualização feita no sistema por inteiro ou no servidor para ser aplicado no navegador e nescessario pausar o servidor e o inicializar novamente, para não termos que fazer isso utilizamos o "nodemon" basicamente ele ira starta o servidor e toda alteração feita ele ira inicializar novamente o servidor, sendo assim não avera a nescessidade de se utilizar o codigo para starta o servidor toda hora */

/*Utilizando o Nodemon:
para utilizar o nodemon e nescessario instalar o pacote dele nas "dev-dependece" do seu projeto, para isso e nescessario utilizar o seguinte codigo

code: npm i nodemon --save-dev

feito isso ele ira para nas dev-dependece do seu arquivo "package.json" e no script do mesmo arquivo

Para executar o servidor utilizando o "nodemon" temos que utilizar o codigo contido dentro do script do arquivo "package.json" que possue a chave "start" porem e nescessario utilizar o atributo "npx" como no codigo a baixo

code: npx nodemon "node do servidor"

Sendo assim toda alteração feita no arquivo startado ira ser atualizada automaticamente sem ouver a nescessidade de desligar e ligar novamente o servidor */