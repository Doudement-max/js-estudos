let permissao; 
 permissao= 'comum';
switch (permissao) {
    case 'comum':
    console.log('usuario comum'); 
    break;  
     
    case 'gerente':  
    console.log('usuario gerente'); 
    break 
     
    default:  
    console.log('usuario desconhecido');
}//exemplo de switch