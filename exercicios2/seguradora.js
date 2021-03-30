 console.log('quais os dados da apolice ? '); 
 let numeroDaApolice = 0; 
var nomeEsobrenome = 'Otavio Ribeiro'; 
let idade = 25;  
// apenas informação de usuarios
let dia = 6; 
let mes = 4; 
let acidente = 69000;   
let calculo = 0;  

//condições 
 console.log('nome e sobrenome '+nomeEsobrenome);  
 console.log('idade:'+idade );    
 
 if (numeroDaApolice >=1000 && numeroDaApolice <= 9999){  
     console.log('o numero de apolice é entre 1000 e 9999')
    } 
    else if(numeroDaApolice <= 0 && numeroDaApolice <= 999){
        console.log('apolice invalida');
    } 
    if (acidente >= 6900) {
        console.log('o limete de acidentes é '+acidente);
    } 
    else if (acidente <= 99999){ 
        console.log ('passou dos limites de acidentes'); 
    }
if (dia > 1 && dia < 12 && mes > 1 && mes <= 2){ 
    console.log('os dias da sua apolice irão ocorrer entre dia 1 a 12 nos meses de Janeiro e Feveiro');
} 
else if (dia <= 31 && mes <= 12) { 
    console.log ('ano 0');
} 
