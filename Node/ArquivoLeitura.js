const arquivo = require('fs');
const caminho = __dirname+'/Arquivo.json'
const conteudo = arquivo.readFileSync(caminho, 'utf-8');
console.log(conteudo);

const arquivo1 = require('./Arquivo.json');
console.log(arquivo1.dados)