'use strict';


function max(numbers){
  let maxNum=numbers[0];
  let i=0;
  while(i<numbers.length){
    if(numbers[i]>maxNum){
      maxNum=numbers[i];
      
    }
    i++;
    

  }
  return maxNum;
}


function min(numbers){
  let minNum=numbers[0];
  let i=0;
  while(i<numbers.length){
    if(numbers[i]<minNum){
      minNum=numbers[i];
        
    }
    i++;
      
  
  }
  return minNum;
}

function findAverage(num){
  let total = 0;
  num.forEach(function(element){    
    (total += element); 
  }); return total / num.length;
}


  


