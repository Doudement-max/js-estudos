 //aplicativo
 var readlineSync = require('readline-sync'); 

let cobracaAnual =Number(readlineSync.question('qual valor da cobrança anual?')); 
let porcentagem =Number(readlineSync.question('qual a porcentagem da cobrança?')); 
  
let calc
for (let ano = 1 ; ano <= 10; ano ++){
    porcentagem+=0.4; 
    calc = cobracaAnual*porcentagem/100; 
    cobracaAnual+=calc; 
    console.log(cobracaAnual);
}

//tentar usando o do..while