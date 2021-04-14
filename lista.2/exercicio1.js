 //ano bissexto.
 let dia =4; 
let mes =1; 
let ano = 1999; 
let calculo =0; 

if(dia >=1 && dia <=31){ 
calculo = dia+1; 
console.log(' o dia seguinte ' +calculo);
} 
if(mes >=1 && mes <= 12){ 
    calculo = mes+1; 
    console.log('o mes seguinte '+calculo);
} 
if (ano >=0 && ano <=2021){
    calculo = ano+1; 
    console.log('o ano seguinte '+calculo);
} 
 if(ano%400 === 0){ 
     
    console.log('ano bissexto'+calculo);
} 
else if(ano%4 === 0 && ano%100 !=0){ 
    
    console.log('ano bissexto'+calculo);
} 
else{ 
    console.log('não bissexto'+calculo);
}