 //aposentadoria
 var readlineSync = require('readline-sync');  
let anos=Number(readlineSync.question('Quantos anos?')); 
var deposito=Number(readlineSync.question('Qual deposito?')); 
let calc=0; 


for(let plano =1;plano <= anos;plano++){
    resultado = deposito*9/100; 
    deposito +=resultado; 
    if(plano){ 
        calc +=deposito; 
        console.log(Math.trunc(calc,anos));  
        
    }
}  
let saque =Number(readlineSync.question('Quanto será sacado?')); 
let calculo=0;
do{  
      deposito = deposito-saque;
       if(deposito){ 
           calculo -= deposito 
           console.log(Math.trunc(calculo));
       }    
}while(calculo <=0)      

//revisar