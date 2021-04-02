let numeroDeVendas = 31; 
if (numeroDeVendas >= 0 && numeroDeVendas <= 30){ 
    console.log('o numero de vendas foi menor que 30, o  bônus é de 250,00 R$');
} 
else if (numeroDeVendas >=31 && numeroDeVendas <= 80){
    console.log('o numero de vendas foi de 31 a 80, seu bonus é de 500,00 R$');
} 
else if (numeroDeVendas >= 81 && numeroDeVendas <= 200){ 
    console.log('o numero de vendas foi entre 81 a 200, o bonus é de 1.000,00 R$'); 
} 
else if (numeroDeVendas >=201 && numeroDeVendas <=1000){ 
    console.log('o numero de vendas superou os 200 então o bonus será, de 2.000,00R$');
}