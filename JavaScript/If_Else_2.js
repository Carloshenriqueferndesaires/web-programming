const situacaoAluno = function(nota) {
    if(nota >=9 && nota <= 10) {
        console.log("quadro de honra");
    } else if(nota >= 7 && nota <= 8.9) {
        console.log("Aprovado");
    } else if(nota >= 4 && nota <= 6.9) {
        console.log("Recuperação");
    } else if(nota >=0 && nota <=3.9) {
        console.log("Reprovado")
    } else {
        console.log("Nota inválida");
    }
      console.log("FIM DO PROGRAMA");
}
 
 situacaoAluno(10);
 situacaoAluno(8.9);
 situacaoAluno(6.55);
 situacaoAluno(2.3);
 situacaoAluno(-1);
 situacaoAluno(11);