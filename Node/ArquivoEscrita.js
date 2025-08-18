const escrita = require('fs'); 

const produto ={
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

escrita.writeFile(__dirname+'/ArquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
}) 
