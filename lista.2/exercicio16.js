 //desconto da  loja
 let jogos=1; 

if ( jogos >= 0 && jogos <= 10 ){ 
  console.log ('não houve desconto')
} 
else if(jogos >= 10 && jogos <=19 ){ 
    console.log ('houve desconto de 20%')  
}else if(jogos >=20 && jogos <=49){
    console.log('houve desconto de 30%')
} 
else if(jogos >=50 && jogos <=99){ 
    console.log('houve desconto de 40%') 
} 
else if(jogos >=100 ){ 
    console.log('houve desconto de 50%')
} 
else if (jogos < 0) { 
    console.log('houve um equivoco')
}