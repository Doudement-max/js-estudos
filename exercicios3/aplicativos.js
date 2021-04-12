var readlineSync = require('readline-sync'); 

let cobracaAnual 
let ano
do{
    cobrancaAnual = readlineSync.question('Qual a cobrança Anual?'); 
    if(cobrancaAnual > 0 && cobrancaAnual <= 15.000){ 
        console.log('A cobrança anual é de',15.000*4/100);
    } 
    
}while(cobrancaAnual <=10)