 //loteira 
 var resultado = Math.floor(Math.random() *9); 
let num1  = 4; 
let num2 = 5; 
let num3 = 1;  
 let calculo = 0; 
if(num1 <= resultado){  
    console.log('ganhou 10 pontos!');
}
else if ( num1 >= resultado && num2 >= resultado && num3 >= resultado){ 
    console.log('acertou  3 ganhou 1000 pontos!');
} 
else if (num1 >= resultado && num2 >= resultado ){
    console.log('acertou 2 ganhou 100 pontos!');
}  