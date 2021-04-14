 //leilão
 var readlineSync = require('readline-sync'); 

let valorDoProduto = Number(readlineSync.question('Qual valor do produto?')); 
let descontoSemanal =Number(readlineSync.question('Qual é o desconto semanal?')); 
let calc = 0;
for(let limiteDeSemana =1 ;limiteDeSemana <=6;limiteDeSemana++){
      descontoSemanal+=0.95;  
      calc = valorDoProduto*descontoSemanal/100; 
      valorDoProduto -=calc; 
      console.log(valorDoProduto);
}
