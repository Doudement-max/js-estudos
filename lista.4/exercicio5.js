var readlineSync = require('readline-sync');

var nomeDeUsuarios =[];  
var  salario =[];  
let hora =[];
do{ 
do{ 
    usuario = readlineSync.question('digite o numero de funcionarios?') 
    nomeDeUsuarios.push(usuario); 
    numeroTotalDeUser = nomeDeUsuarios.length; 

}while(numeroTotalDeUser == usuario) 
do{ 
 horaTrabalhada =Number(readlineSync.question('quantas horas foram trabalhadas?')); 
 hora.push(horaTrabalhada); 
 horasTotais = hora.length;
}while(horasTotais == Infinity && horaTrabalhada != 0 ); 
console.log(hora,'horas'); 
 do{  
   
    declaracaosalario = Number(readlineSync.question('qual salario?'));
    if(salario === declaracaosalario){
        console.log(salario);
    } 
  nomeDeUsuarios.push(salario); 
  valorTotalDoSalario = salario.length;    
}while(declaracaosalario <= Infinity && salario !=0)
 console.log('o salario vai ser',declaracaosalario+'  reais, para o funcionario '+nomeDeUsuarios+'mais horas',hora); 
 
}while('');  
