let temperatura =Number (16); 

if (temperatura < 15){ 
    console.log('15° Muito frio')
} 
else if (temperatura <= 16 && temperatura <= 23){
    console.log('16° a 23° frio')
} 
else if (temperatura >= 23 && temperatura <= 26){ 
    console.log('23° a 26° agradável')
} 
else if (temperatura >= 26 && temperatura <= 30){ 
    console.log('26° a 30° quente')
} 
else if (temperatura < 31){ 
    console.log('31° muito quente')
}