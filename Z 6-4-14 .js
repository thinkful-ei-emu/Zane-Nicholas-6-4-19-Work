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

<<<<<<< HEAD
function filter(arr,fn) {
  let newArray=[];
  for(let i=0;i<arr.length;i++){
    if(fn(arr[i])===true){
      newArray.push(arr[i]);
=======

function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    if (fn(arr[i]) === true){
      newArray.push(arr[i])
>>>>>>> 57f27e213249011f6fbd80b1acdc2e3e63997ee2
    }
  } return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning){
  let warningCounter=0;
  return function (location){
    warningCounter++;
    if(warningCounter===1){

      console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today !`);
    }
    else{
      console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today !`);

    }
    
  };
}

const rockWarning=hazardWarningCreator('Rocks on Road');
const floodWarning=hazardWarningCreator('There is flooding in area');
const giantKittenWarning=hazardWarningCreator('There is a large feline in your Area');


rockWarning('Mount Everest');
floodWarning('Miami Beach');
giantKittenWarning('Your backyard');










