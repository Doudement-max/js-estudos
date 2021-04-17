/*var readlineSync = require('readline-sync');

for(let comparacao =1;comparacao < 12;comparacao++){ 
    
arr1 =Number(readlineSync.question('qual sequencia de numero de 0 a 11?')); 
  if(arr1 > 0 && arr1 <=11){ 
    var arr1 =[];  
    arr1.reverse();
    console.table(arr1);    
  }  
  
  do{
    sair = readlineSync.question('deseja sair? se voce deseja sair digite "0"')
}while(sair !=0)
break;
}*/ 
 
var num =[];
var readlineSync = require('readline-sync'); 

do{
    informado =Number(readlineSync.question('escolha um numero:')) 
    num.push(informado); 
    proporcao = num.length;
}while(informado !=0 && proporcao <=11); 
console.table(num);

