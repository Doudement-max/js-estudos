 console.log ('ticket para adultos vale 20R$! ticket infantil vale 12R$!'); 
 //pratos para adultos
const adulto=Number(20);  
let sopa= adulto-18;   
let macarronada= adulto-18; 
let bolinhadequeijo=adulto-14;
console.log ('a sopa custa R$18,e cada ticket para adulto vale', adulto, 'o preço final fica',sopa);  
console.log ('a macarronada custa R$18,e cada ticket para adulto vale', adulto, 'o preço final fica',macarronada);  
console.log ('a bolinha de queijo custa R$14,e cada ticket para adulto vale', adulto, 'o preço final fica',bolinhadequeijo);  
//cardápio do adulto feito 
 
//pratos infantis 
const infantil=Number(12); 
let ham= infantil-10; 
let batatafrita=infantil-5;
let doces= infantil-7; 
console.log ('(infatil)o hamburguer custa R$10 o preço final fica', ham );   
console.log ('(infantil)a batata custa R$5 o preço final fica', batatafrita );  
console.log ('(infantil) os doces custam R$7', doces); 
//cardápio feito! 
 
var ticket=adulto*3; 
console.log('serão necessários 3 tickets que totalizando da ', ticket); 
var ticketInfantil=infantil*2; 
console.log('serão necessários 2 tockets que totalizando da ', ticketInfantil); 
//fechou 