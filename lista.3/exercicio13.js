 //turmas da Escola 
 var readlineSync = require('readline-sync');  
 


 let turma = Number(readlineSync.question('Qual a turma? se for A digite "1", se for B digite "2" e se for C digite "3"')); 
 switch (turma){          case 1: 
 console.log(' turma "A"'); 
 break; 
 case 2:
  console.log('turma "B"'); 
  break; 
  case 3: 
  console.log(' turma"C"'); 
  break;    

  default: 
  console.log('turma não informada');  }  

  let mes = Number(readlineSync.question('Qual mês?')); 

  if(mes >= 3 && mes <=11){
      console.log('mês secionado '+mes);
  } 
  else{
      console.log('mês não aceito');
  } 
 
  var series =Number(readlineSync.question('Qual a série? Se for Jardim da infancia digite "0",se for outra serie digite "1" a "9"'));   
  let mensalidade =Number(readlineSync.question('Qual a mensalidade?'));
  let calc =0;
  do{
  series 
  serieJardim =0; 
  calc += series+serieJardim; 
  console.log('jardim da infacia',);
  if(series > 0 && series <= 9){ 
      console.log(series);
  }
 
  }while(series >=10){
      console.log('serie selecionada'); 

  }  
  do{  
      do{
      mensalidade 
      mensalidadeEscolar =160; 
      mensalidade += calc+mensalidadeEscolar; 
      if(mensalidade === 160){
          console.log(mensalidade);
      }

      }while(mensalidade < 160); 

    do{
        
        mensalidade = 180;  
           console.log('mensalidade Jardim de infancia',mensalidade); 
        
         
        }while(mensalidade < 180) 

    }while('')