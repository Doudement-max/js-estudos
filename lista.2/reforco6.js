

console.log('Para fazer calculo de elevação ao quadrado digite 1'); 
console.log('Para fazer calculo de raiz quadrada digite 2'); 
console.log('para fazer calculo de seno digite 3'); 
console.log('para fazer calculo de exponencial digite 4'); 
console.log('sair do programa digite 0'); 
const opcao = Number ('qual opção voce deseja: ' );

let calcluo = 0; 
if(opcao === 1){
    let base = Number ('qual o numero da base: ' ); 
    let expoente = Number ('qual o numero do expoente ' ); 
    calculo = Math.pow(base, expoente); 
    console.log(calculo);
}
else if (opcao === 2){ 
    let valor = Number ('qual valor voce deseja fazer o calculo?: ' );  
    var raizQuadrado = Math.sqrt(valor); 
    console.log(raizQuadrado);

} 
else if (opcao === 3){ 
    let valor = Number ('qual valor voce deseja fazer o calculo?: ' ); 
    var seno = Math.sin(valor); 
    console.log(seno);
} 
else if (opcao === 4){ 
    let valor = Number ('qual valor voce deseja fazer o calculo?: ' ); 
    var exponencial = Math.exp(valor);

} 
else if (opcao === 0){ 
    console.log('Voce saiu do programa'); 
}  
else{ 
    console.log('programa invalido');
}
