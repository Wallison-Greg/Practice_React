function novoElemento(tagName, className){ //função responsavel por criar os elementos html (tag) e inserir as classes
    const elem = document.createElement(tagName);
    elem.classList.add(className);
    return elem;
}

function Barreira(reversa = false){ //função responsavel por criar a barreira do jogo 

    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');

    this.elemento.appendChild(reversa ? corpo : borda); //ira definir se a barreira esta para cima
    this.elemento.appendChild(reversa ? borda : corpo);//ira definir se a barreira esta para baixo

    this.setAltura = (altura) => corpo.style.height = `${altura}px`;
}

function ParDeBarreiras(altura, abertura, x){
    this.elemento = novoElemento('div', 'par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;

        this.superior.setAltura(alturaSuperior);
        this.inferior.setAltura(alturaInferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = (x) => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura()
    this.setX(x);
} 

function Barreiras(altura, largura, abertura, espaço, notificarPonto){
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaço),
        new ParDeBarreiras(altura, abertura, largura * 2),
        new ParDeBarreiras(altura, abertura, largura * 3)
    ];

    const deslocamento = 3;
    this.animar = ()=> {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento);

            if(par.getX() < par.getLargura){
                par.setX(par.getX() + espaço * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2;
            const cruzouOmeio = par.getX() + deslocamento >= meio && par.getX() < meio;

            if(cruzouOmeio){
                notificarPonto();
            }
        })
    }
}

function Passaro(alturaJogo){
    let voando = false;

    this.elemento = novoElemento('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';

    this.getY = () => {
        parseInt(this.elemento.style.bottom.split('px')[0]);
    }

    this.setY = (y) => {
        this.elemento.style.bottom = `${y}px`;
    }

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : 5);
        const alturaMaxima = alturaJogo - this.elemento.clientHeight;

        if(novoY <= 0){
            this.setY(0);
        }
        else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima);
        }
        else{
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}

const barreiras = new Barreiras (550, 800, 200, 400);
const passaro = new Passaro(550);
const areaDojogo = document.querySelector('[wm-flappy]');

areaDojogo.appendChild(passaro.elemento);
barreiras.pares.forEach(par => areaDojogo.appendChild(par.elemento));

setInterval(() =>{
    barreiras.animar();
    passaro.animar();
}, 20);