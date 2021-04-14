 //medindo diversas formas de traingulo
 let ladoDireito = 105; 
let ladoEsquerdo = 200; 
let baseDosLados = 175; 

if (ladoDireito <= 100 && ladoEsquerdo <= 100 && baseDosLados <= 100) { 
    console.log ('se todos os lados tiverem o mesmo tamanho isso signifca que é um equilátero'); 
} 

else if (ladoDireito <= 101 && ladoEsquerdo <= 101 && baseDosLados >= 150){
    console.log('se houver mudança apenas uma mudança no triangulo signifca que é isoceles') 
} 
 else if (ladoDireito <= 105 && ladoEsquerdo <= 200 && baseDosLados <= 175 ){  
    console.log('se houver mudança de varias partes do triangulo logo será escaleno');
  }