
//iniciais do exercicio  
const dolar=Number (6);
  let centavo1=0.01; 
  let centavo5=0.05; 
  let centavo10=0.10; 
  let centavo25=0.25; 
  let centavo50=0.50;  
  
  let calculo=centavo1+centavo5+centavo10+centavo25+centavo50; 
// valores descobertos/calculo.
console.log ('quanto custa o dolar convertido em real?',dolar);
  console.log ('temos aqui centavos para fazer o jogo',centavo1,centavo5,centavo10,centavo25,centavo50); 
console.log('o valor total de centavos é ',calculo);

if(calculo == dolar){ 
  console.log('Parabéns ganhou o jogo!'); 
  console.log(dolar,'de',calculo);
}else{ 
  console.log('Fim de jogo!'); 
  console.log(dolar,'de',calculo);
}
 