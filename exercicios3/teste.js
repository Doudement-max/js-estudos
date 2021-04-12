var readlineSync = require('readline-sync'); 

let altura = 0;
var sexo = '';  

do{   
    do {
        sexo = readlineSync.question ('Descreva seu sexo com "m" para mascolino e "f" para feminino') 
        if (sexo !='m' && sexo !='f'){
            console.log('letras aceitaveis "m" para masculinos e "f" feminino');
        } 
    }while(sexo !='m'&&sexo!='f') 
    do {
        altura  = Number(readlineSync.question( 'Descreva sua altura' )); 
        if (altura < 0 || altura > 2.00){
            console.log('altura maxima permitida 2 metros');
        }
    }while(altura < 0 || altura >= 2.00 ) 
      
     sair = readlineSync.question('deseja sair? se voce deseja sair digite "sim"')
}while(sair !='sim')

 
