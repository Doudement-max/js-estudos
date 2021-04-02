let notaDoAluno = 20;  
let faltas = 43; 
 
if (notaDoAluno >= 28 && notaDoAluno <= 40 && faltas >=0 && faltas <= 43){ 
    console.log('aluno foi aprovado, e não passou 25% do numero de faltas');
}  
else if (notaDoAluno <= 0 && notaDoAluno <=19 && faltas <= 45){ 
    console.log(' aluno foi reprovado, e utrapassou o numero de faltas ');
} 
else if (notaDoAluno >= 20 && notaDoAluno <= 24 && faltas >=33){ 
  console.log('o aluno ficou de recuperação');
} 