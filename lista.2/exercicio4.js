 //carpintaria
 console.log('o valor minimo das placas de madeiras é de 300 R$ porém placas de agelim custam 150 a mais');

 let numeroOrcamento = 825; 
 let nomeDoCliente = 'Talisca'; 
 let tiposDeMadeiras =450;  
 let numeroDeCaracteristicas = 15; 
 let cor = 15; 
 console.log('o numero do orçamento é '+numeroOrcamento);  
 console.log('nome do cliente '+nomeDoCliente);  
 //primeira etapa
 if (tiposDeMadeiras >= 0 && tiposDeMadeiras <= 300) {
     console.log('placas normais ou de pinus');
 } 
 else if (tiposDeMadeiras <=450) {
     console.log('placas de angelim');
 } 
  if (numeroDeCaracteristicas >= 0 && numeroDeCaracteristicas <= 12){ 
     console.log('o numero de caracteriscas na placa foi 12 nenhum valor foi extra foi add');
 } 
 else if (numeroDeCaracteristicas >= 13 && numeroDeCaracteristicas <= 9999){ 
     console.log('são mais de 12 caracteriscas será cobrado 15,00 R$');
 } 
if (cor >= 0 && cor <= 10) {
    console.log('placas de cores preto e branco não serão cobrados');
} 
else if (cor >=11 && cor <=20){
    console.log('se a cor for personalisada ou dourada será cobrado 60 R$');
} 
