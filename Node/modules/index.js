/*Basicamente utilizamos o "babel" como uma forma de gerar compatibilidade entre navegadores, ou seja, existem navegadores mais antigos que não são compativeis com as novas funcionalidades de algunas tecnologias, sendo assim nescessario adaptar o codigo da nova linguagem para que ele possa rodar corretamente dentro desse navegador */

/*Para isso e nescessario utilizarmos o isntalador de pacode "NPM" no nosso codigo para que ele posssa corrigir o codigo de maneira que ele possa rodar nos navegadores não compativeis */

//para utilizarmos o instalador de pacotes "NPM" e nescessario colocar o seguinte codigo dentro do terminal do projeto 
//code: "npm init -y"
//com isso ele ira instalar o pacote npm e ira gerar um arquivo "package.json"

//instalando os pacotes do babel via npm 
//code: "npm install --save-dev @babel/cli @babel/preset-env @babel/core"

/*Feito isso ele ira gerar um pacote "package-lock.json" e uma pasta "Node-Modules*/

/*Apos baixar todos os pacotes basta criar o codigo que sera executado no navegador e passar esse codigo para dentro do babel para que ele possar transformar o codigo em uma forma mais compativel com o navegador */

//para isso e nescessario passar o seguinte codigo para dentro do terminal para que ele possa converter o codigo 
//code: "npx babel index.js -o babel.js --presets=@babel/env"

//basicamente o comando acima faz com que o "npx babel" pegue o arquivo que voce deseja converter o codigo, que no caso e o arquivo "index.js" passa pelo operador '-o' que tem como função de gerar um saida, nesse caso voce tera que definir um novo arquivo de saida que no caso e o arquivo "babel.js" passar o metodo de conversão "presets@babel/env" que vai gerar o novo codigo 

//Ex: 

const nome = 'luiz';
const obj = {nome};
const novoObj = {...obj};
const arr = ['wallison', ...novoObj];

console.log(novoObj);

/*Obs: Apos converter o codigo, toda alteração feita no script original devera ser convertida caso queira a compatibilidade com os demais navegadores ou seja tera anescessidade de se utilizar o comando "npx babel "arq-original" -0 "new-arq" --presets=@babel/env", ou seja, com isso toda alteração feita tera que ser modificada via terminal */

/*Caso queira que as alterações feitas no codigo original sejão altomaticamente convertidas para o novo codigo e nescessario realizar algumas alterações dentro do arquivo "package.json", especificamente dentro do atributo "script", nesse caso teremos que gerar uma nova chave dentro desse atributo e atribuir para dentro dessa chave o seguinte comando 

code: "babel ./index.js -o ./babel.js --presets=@babel/env -w"

Assim como foi definido dentro do nosso arquivo "package.json" na chave "convert", apos isso basta da um start na chave criado, para isso basta ir no terminal e colocar o seguinte codigo 

code: "npm run convert" nesse caso o termo "convert" e referente ao nome da chave que sera iniciada */