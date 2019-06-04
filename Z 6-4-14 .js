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

// Higher order function drills

function repeat(fn, n){
  for (let i = 0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log('hello world');
}

function goodbye(){
  console.log('goodbye world');
}

repeat(hello, 5);

repeat(goodbye, 5);





