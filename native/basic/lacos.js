/*Esttrutura de laços de repetições*/

/*
Basicamente existem 3 tipos de laço de repetição do tipo (for) e 2 tipode de laço de repetição do tipo (while)

Estrutura for:

1ª for(let i = 0; i <= value; i++){
    basicamente esse laço tem como objetiver realizar a conta de um valor ou seja atravez dele podemos definir a quantidade de numeros que serão contado
    essa contagem e definida atravez do seu encremento 
}

2ª for(let i in value){
    diferente do laço (for) o (for in) ao invez de fazer uma conta ele pega o indice do valor selecionado esse laço e bastante utilizado
    para fazer leitura de array ou list
}

3ª for(let i of value){
    basicamente oque difere esse laço (for) dos demais e o fato dele não trazer o indice do valor ou seja nesse caso ele traz somente o valor 
    que o indice representa
}
*/

/* EX: for*/

const nomes = ['wallison', 'gisleny', 'joao', 'luana']

for(let i = 0; i < nomes.length; i++){
    console.log(`nome ${i} : ${nomes[i]}`);
}
console.log('######')
/* EX: for in*/

for(let i in nomes){
    console.log(`nome ${i} : ${nomes[i]}`);
}
console.log('######')
/* EX: for of */

for(let i of nomes){
    console.log(`nome ${i}`);
}
