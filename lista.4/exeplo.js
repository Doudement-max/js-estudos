 console.log('array basic');
 var times = ['Flamengo','Milan','Real Madrid','Gama']; //lembresse 0,1,2,3.

console.log(times[1]);
 console.log(times.length); //comando length fala o tamanho do array o tamanho total que foi descrito na variavel 
  console.log(times);
  console.table(times)      
      times[2] = 'Boca Juniors';

console.log('array bidimensional');
 var boletim = [[8,7,9,3],[4,5,8,6]]; 
 console.log(boletim[1][2]); 
 console.table(boletim);//melhor forma para ler o comando  

 console.log('Comparando vetores'); 
 const arr1 = [1,2,3] 
 const arr2 = [1,2,3]//os dois vetores são iguais em variaveis diferentes 

 const compare = (arr1,arr2) => {
     return arr1.length === arr2.length &&  arr1.every((item, index) => intem === arr2 [index]); 
 } 

 console.log(compare(arr1, arr2));