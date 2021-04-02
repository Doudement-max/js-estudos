let dia = 31 ; 
let mes = 5 ; 
let ano = 2020; 
if (dia >= 1 && dia <= 31 && mes >=1 && mes <=12 && ano >=0 && ano <= 2021) {
    console.log('ano valido');
} 
else if (ano%400 == 0){ 
    console.log('é bissexto');
} 
else if (ano%4==0 && ano%100!=0){ 
    console.log('é bissexto');
} 
else{ 
    console.log('Não é bissexto');
}


