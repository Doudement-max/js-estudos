console.log('quantos m³ foi usado, no dimicilio de 37m³?'); 
let volumeDeFaixa = 22; 
let franquiaDeConsumo = 5; //vezes o valor calculado  
let calculo = 0; 
let esgoto = 80/100;
if (volumeDeFaixa <= 5){ 
    console.log(' faixa 1: será pago uma tarifa de 37,47 reais');
} 
else if(volumeDeFaixa <= 6 && volumeDeFaixa <=10){ 
    calculo = franquiaDeConsumo*1.16; 
     
 console.log('faixa 2 sera pago '+calculo);
} 
else if(volumeDeFaixa <= 11 && volumeDeFaixa <= 15){ 
    calculo = franquiaDeConsumo*6.46; 
    console.log('faixa 3 sera pago '+calculo);
} 
else if(volumeDeFaixa >= 16 && volumeDeFaixa <= 20){ 
    calculo = franquiaDeConsumo*6.49; 
    console.log('faixa 4 sera pago'+calculo);
} 
else if (volumeDeFaixa >=21 && volumeDeFaixa <=30){
    calculo = 6.55*10; 
    console.log('faixa5  '+calculo);
}