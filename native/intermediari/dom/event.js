/* basicamente trablahar com eventos via js no html e o mecanismo mais utilizado, para que podemos realizar essa operação e nescessario fazer alterações tanto no html como no js */

//função para definir um aspecto a ser aplicado quando o evento for chamado 

function contagem(e){
    e.preventDefault();

    setTimeout(() => {
        const link = e.target; //capiturando o elemento clicado
        window.location.href = link.href;
    }, 5000);
}

//chamando o evento via js

const a = document.getElementById('viaJS');
a.onclick = contagem;

/* Observa-se que ao invez de definirmos o evento "onclick" dentro do proprio html e passar a função para dentro desse evento, realizamos a chamado do evento e a passagem da função para dentro do evento dentro do proprio "js" */

const bd = document.querySelector('body');
const div = document.createElement('div');

div.innerHTML = 'evento - 2';

div.classList.add('destaque');

div.style.position = 'absolute';

bd.appendChild(div);

div.onmousemove = e =>{ //gerando a funcionalidde de movimentar o elemento com o mouse atravez do evento "onmousemove"
    div.style.cursor = 'move';
    if(e.buttons){
        e.target.style.top = `${e.clientY - (div.clientHeight / 2)}px`
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Lista de eventos que podem ser trabalhados via js */

//1º : onclick = "Basicamente esse evento e assionado quando se clica em algum elemento html".

    const a = document.getElementById('viaJS');
    a.onclick = contagem;

//2º : onload = "Esse evento e disparado quando a pagina web se carrega por completo ou seja quando o sistema e totalmente renderizado"

    const div3 = document.createElement('div');
    div3.innerHTML = 'onload';

    window.onload = () =>{
        console.log('pagina carregada');
    };

//3º : click = "basicamente utilizamos esse evento para inserir funcionalidades ao elementos, ou seja, com ele podemos definir eventos para elementos"

    a.addEventListener('click', () => {
        console.log('click');
    });

//obs : para atrelarmos um evento a um elemento e nescessario utilizar o metodo "addEventListener" basicamente esse metodo recebe 2 para metro, 1° ("uma string definindo qual evento sera capturado, ou seja, nesse caso sera o evento 'click'") 2° ("função calback definindo a funcionalidade que sera aplicada apos o evento ser acionado")

//4º : hover / mouseover = "Basicamente o evento hover e similar ao "hover" do css ou seja ele sera acionado quando o usuario passar com o mause por cima do elemento na qual ele foi aplicado, o seu diferencial do "hover" do css e que com ele podemos não so formatar o elemento mais sim aplicar funcionalidades a esse elemento, ou seja, ao utilizarmos esse evento sempre que passarmos por cima do elemento que recebeu esse elemento ele ira ser assionado

    a.addEventListener('mouseover', () => {
        a.classList.add('destaque');
    });

