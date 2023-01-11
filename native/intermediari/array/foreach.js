/* Basicamente o (foreach) e um laço bastante utilizado para realizar leitura dos valores de lista ou arrays */

const nomes = ['wallison', 'lucas', 'lekas', 'gaba'];

nomes.forEach((valor, index, array) => {
    console.log(`id : ${index} - nome: ${valor}`);
});

