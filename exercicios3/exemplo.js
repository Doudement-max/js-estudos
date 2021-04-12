var readlineSync = require('readline-sync'); 
 let cliente 
 let numeroDaConta
 let valorTotalDaCompra 
 let prestacao

 do{
     nome   =readlineSync.question('Qual o seu nome'); 
     numeroDaConta  =Number(readlineSync.question('Qual o numero do seu codigo')); 
     valorTotalDaCompra =Number(readlineSync.question('Qual o valor total da compra?'));
 do{
     prestacao=Number(readlineSync.question('Digite a quantidade de prestações entre 2 e 36'));
 } while(prestacao <2 || prestacao >36); 
 console.log('Nome do cliente',nome); 
 console.log('codigo do cliente',numeroDaConta);
 console.log('Valor total da compra',valorTotalDaCompra); 
 console.log('prestação valor',prestacao); 
 console.log('Valor da prestação:',valorTotalDaCompra/prestacao); 
 sair   =Number(readlineSync.question('SE deseja sair digite 0'));
    }while(sair !=0);

