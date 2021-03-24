const valor=Number(150); 
let calculo=0;
 
if(valor=>calculo){ 
    calculo=valor*20/100
    console.log('se 10 a 19 jogos forem comprados o desconto será',calculo);
} 
if(valor=>calculo){ 
    calculo=valor*30/100
    console.log('se 20 a 49 jogos forem comprados o desconto será',calculo);
} 
if(valor=>calculo){ 
    calculo=valor*40/100
    console.log('se 50 a 99 jogos forem comprados o desconto será',calculo);
}   
 if(valor=>calculo){ 
    calculo=valor*50/100
    console.log('se for 100 ou mais jogos comprados o desconto será',calculo); 
}  
else{ 
    console.log('caso seja comprado 9 jogos não terá desconto!');
}
