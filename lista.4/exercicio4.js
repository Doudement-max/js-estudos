var readlineSync = require('readline-sync'); 
 
var numeroDeLivros = [];  
var nomeAutor = readlineSync.question('qual nome do autor?'); 

do{ 
    livrosEscritos = Number(readlineSync.question('quantos livros foram escritos?')); 
    numeroDeLivros.push(livrosEscritos); 
     total = numeroDeLivros.length; 
}while(total <= 50 && livrosEscritos !=0); 
console.log('o autor  '+nomeAutor+'  fez essa quantidade de livros',numeroDeLivros); 
 
do{
    idadeDopublico = Number(readlineSync.question('idade do publico?'));  
    numeroDeLivros.push(idadeDopublico); 
    limiteDaIdade = numeroDeLivros.length; 
    if(idadeDopublico > 0 && idadeDopublico <= 16){
        console.log('ele escreveu para jovens de ',idadeDopublico+'anos');
    }  
    else{
        console.log('idade não aceita');
    } 
}while(limiteDaIdade <= 1 && idadeDopublico !==0); 





