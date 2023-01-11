function Calculadora(){

    this.display = document.querySelector('.display');


    this.start = function () {
        this.cliqueBtn();
    };

    this.cliqueBtn = function () {
        document.addEventListener('click', (e) => {
            let el = e.target;

            if(el.classList.contains('btn-num')){  
                this.btnDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay(); 
            }

            if(el.classList.contains('btn-del')){
                this.backspace();
            }

            if(el.classList.contains('btn-eq')){
                this.calc();
            }
        });
    };

    this.btnDisplay = function (valor){
        this.display.value += valor;
    };

    this.clearDisplay = function (){
        this.display.value = '';
    };

    this.backspace = function (){
        this.display.value = this.display.value.slice(0, -1);
    };

    this.calc = function () {
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
    };
}

const calc = new Calculadora();

calc.start();