function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){ //metodo start
            //basicamente esse metodo se inicia junto com a calculadora ou seja nesse caso ele chama logo de inicio o metodo "cliqueBtn()" que possue todas as funcionalidades dos botões

            this.cliqueBtn();
        },

        cliqueBtn(){ //aplicando as funcionalidades dos botões 
            document.addEventListener('click', (e) => { //basicamente estamos pegando qual elemento esta sendo clicado e passando para dentro da variavel
                const el = e.target;

                if(el.classList.contains('btn-num')){ //basicamente essa condição pergunta se estamos selecionando o botão da qual esta recebendo essa classe 
                    this.btnDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay(); //caso o botão que recebe a classe "btn-clear" for clicado ele ira chamar o metodo "clearDisplay()"
                }

                if(el.classList.contains('btn-del')){
                    this.backspace();
                }

                if(el.classList.contains('btn-eq')){
                    this.calc();
                }
            });
        },

        //Definindo as funcionalidades dos botões 

        btnDisplay(valor){
            this.display.value += valor;
        },

        clearDisplay(){
            this.display.value = '';
        }, 

        backspace(){
            this.display.value = this.display.value.slice(0, -1);
        },

        calc(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('conta invalida');
                    return;
                }

                this.display.value = conta;

            }catch(e){
                alert('conta invalida');
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();