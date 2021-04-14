//jogo dos numeros aleatorios
var testando=Math.floor(Math.random() *10); 
console.log(testando); 
let numeroAleatorio = 2; 

if(numeroAleatorio === testando){ 
    console.log('correto!');
} 
else if (numeroAleatorio <= testando){ 
    console.log('muito baixo');
} 
else if (numeroAleatorio >= testando){ 
    console.log('muito alto');
}