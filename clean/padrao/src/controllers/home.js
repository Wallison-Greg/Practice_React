const Model = require('../model/md');

Model.create({ //alimentando a base de dados
    nome: 'wallison',
    idade: 22
}).then(dados => console.log(dados))

exports.hm = (req, res) => {
    res.render('index'); //função responsavel por renderisar a view 
}