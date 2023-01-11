/*Basicamente o parametro "req" no servidor express e responsavel por realizar a requisição que o usuario esta pedindo
basicamente o parametro "req"  possui alguns metodo uteis

1º params: basicamente esse metodo e responsavel por pegar o valor do parametro passado para dentro da url so sistema assim como foi feito no arquivo "get.js"

obs: para definir que um endereço da url e um parametro e nescessario utilizarmos "/:" antes de definir o nome do parametro asssim como foi feito no metodo get "endereco" no caso desse exemplo no final do parametro colocamos "?" para que não seje obrigatorio passar um valor para o parametro do endereço

basicamente utilizamos o "req.params" para pegar o valor do endereço requisitado pelo usuario para assim podemor mandar algo para o usuario, basicamente esse metodo capitura o valor do parametro inserido pelo usuario na url do site 

2º query: basicamente o metodo "req.query" e similar ao "req.params" o seu diferencial e que ai invez de pegar o valor do parametro da url definida pelo o usuario ele pega o valor da query contida dentro da url, esse metodo não e tanto utilizado

3º body: o metodo "req.body" e bastante utilizado em passagem de valores ou seja basicamente ele captura os valores enviados do formulario contido dentro do corpo da aplicação ou seja dentro do "body" do html

para utilizarmos o "req.body" e nescessario passarmos para o express que iremos fazer essa funcionalidade, para isso e nescessario utilizarmos a variavel que recebe as funcionalidades do express que nesse caso e a variavel "app" utilizando o metodo "use" esse metodo recebe uma função como parametro, nesse caso essa função e o "express.urlencoded()" e essa função deve receber um objeto com o atributo "extend" recebendo o valor "true", sei que ficou meio confuso mais ficara mais facil de entender vendo o codigo no arquivo "get.js" 

ao utilizarmos essa função o metodo "req.body" podera ter acesso as informações passadas pelo usuario via form*/