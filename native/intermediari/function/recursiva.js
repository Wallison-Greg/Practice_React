/* Basicamente uma função tem como objetivo se auto chamar ou seja basicamente ela funciona como um laço de repetição, nesse caso enquanto ela tiver comprindo com a ordem definida dentro dela ela ira se auto invoca */

/* Para criarmos uma função recursiva e nescessario definir o limite da repetição ou seja o limite que essa função sera chamada, e nescessario tambem colocarmos um encremento para que essa função possa parar de ser executada e por ultimmo devemos chamar a propria função dentro dela  */

//EX

function recursive(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursive(max);
}

recursive(0);

/* Observa-se que dentro da função definimos o limite de repetição, o encremento e chamamos a propria função dentro dela mesma */