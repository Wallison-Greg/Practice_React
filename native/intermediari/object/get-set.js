/* Basciamente utilizamos os Metodos (Get - Set) para manipular os valores dos atributos de um objeto ou seja utilizamos o metodo Get para mostrar os valores e utilizamos o metodo Set para realizar alterações nos valores

Utilizamos o metodo "set" para definir um alteração nos valores de um atributo de forma segura ou seja definimos um padrão que caso não seja comprido ele ira disparar um erro, como em casos de atributos que so possão receber valores numericos e o usuario altere esse valor para um valor do tipo string nesse caso iremos definir dentro do proprio objeto o metodo set par indicar que o valorer desse atributo so podera ser alterado por outro valor numerico

ja o metodo "Get" utilizamos para retornar o valor do atributo desejado*/

/* Modelo de "get / set" para funções construtoras */

function Pessoa(nome, idade, peso){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    

    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: true,
        get: () =>{
            return idade;
        },
        set: (valor) => {

            if (typeof valor !=='number'){
                console.log('insira um valor numerico');
                return;
            }else{
                idade = valor;
            }
        }
    })
}

const p1 = new Pessoa('wallison', 21, 60);

console.log(p1);

/* Observa-se que somente na chamada do objeto em si o valor do atributo que recebeu o metodo (get - set) não foi mostrado nesse caso isso ocorre porque o valor desse atributo esta contido dentro do metodo "get" para reporduzir o valor do atributo e nescessario chamar não so o objeto como tambem o seu atributo */

console.log(p1.idade);

p1.idade = "22";

console.log(p1.idade);

/* Observa-se que o valor do atributo foi alterado nesse caso isso foi possivel por conta do metodo set ou seja caso o usuario insira um valor que não seja numerico o cosole ira disparar um erro */

