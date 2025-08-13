let contador = 1;
while (contador <= 10) {
    console.log(`Contador: ${contador}`);
    contador++;
}   

for (let i = 1; i <= 10; i++) {
    console.log(`frequencia: ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`);
}

const notas1 = [6.7, 7.4, 9.8, 8.1, 7.7];
for ( i in notas1) {
    console.log(i,notas1[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 25,
    peso: 60
};
for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`);
}                                           