const kilosgramas = Number (1.2); 
let calculo = 0; 
if (kilosgramas<=0.5){ 
    console.log('preço da encomenda R$:10,10')
} 
else if (kilosgramas>0.5&&kilosgramas<=2.0){
    console.log('preço da encomenda R$2,20')
} 
else if (kilosgramas>2.0&&kilosgramas<=2.0){ 
    console.log('preço da encomenda R$:3,70')
} 
else if (kilosgramas>=10.0){ 
    calculo=5.0+3.8; 
    console.log('preço da encomenda R$:5,00+R$3,80 pelo peso que ultrapassa 10kg'); 
    console.log('Total a pagar R$:',calculo);
}//revisar 
