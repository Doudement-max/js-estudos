var readlineSync = require('readline-sync'); 
var numeroInformado =[];  

    do{ 
        selecionado = Number (readlineSync.question('infome um numero')); 
         var total = numeroInformado.length;
        numeroInformado.push(selecionado);  
    
    }while(total <=11 && selecionado !=0); 
    console.log(numeroInformado); 
    for (let relacao = 0;relacao; relacao++) { 
         var calc;
         media = calc /total;
         console.log(numeroInformado[relacao],media,total);


    } 
        /*for(escolha = 1; escolha < 11;escolha++){
    selecionado = Number(readlineSync.question('infome um numero')); 
    if(selecionado > 0 || selecionado !=0 && selecionado < 11 && total){    
        numeroInformado.push(selecionado);   
        var total = numeroInformado.length;
        console.log(selecionado);
    }

}*/
