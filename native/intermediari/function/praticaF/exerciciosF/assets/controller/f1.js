function convercao(){
    return{
        display: document.querySelector('#display'),

        start(){
            this.btnOpcoes();
        },
        btnOpcoes(){
            document.addEventListener('click', (e) => {
                let el = e.target;

                if(el.classList.contains('.cel')){
                    this.celsius();
                }
                if(el.classList.contains('.far')){
                    this.farenheit();
                }
            });
        },
        celsius(){
            let cont = this.display.value;
            const resC = (cont * 9/5) + 32;
            this.display.value = resC;
        }, 
        farenheit(){
            let vl = this.cont;
            const resF = (vl - 32) * 5/9;
            this.display.value = resF;
        }
    }
}

const temperatura = convercao();

temperatura.start();