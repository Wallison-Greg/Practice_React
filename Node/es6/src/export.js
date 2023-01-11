/*Basicamente usaremos esse arquivo para exportar funcionalidades para o script preincipal que sera lido pelo o webpack, nesse caso utilizaremos o metodo de "import / export" basico  */

const nome = 'wallison'

function nomeCompleto(nome, sobrenome){
    return `nome: ${nome} \nsobrenome: ${sobrenome}`
}

export { nome, nomeCompleto }