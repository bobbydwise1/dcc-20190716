/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

const makeRandomNumber = () => {
  return Math.ceil(Math.random()*10);
}

const makeRandomNumberNegPos = () => {
  return Math.ceil(Math.random()*20-10);
}

const makeRandomArray = (size) => {
  outputArray = [];
  for (i=0; i<size; i++) {
    outputArray.push(makeRandomNumberNegPos());
  }
  return outputArray;
}

const sortArray = (yourArray) => {
  outputArray = [];
  for (i=0; i<yourArray.length; i++) {
    for (j=0; j<yourArray.length; j++) {
      if ( yourArray[j] > yourArray[j+1] ) {
        tempVar1 = yourArray[j];
        tempVar2 = yourArray[j+1];
        yourArray[j] = tempVar2;
        yourArray[j+1] = tempVar1;
      }
    //console.log('turn(i,j) = ', i,', ',j, ' value: ',yourArray)
    }
  }
  return yourArray;
}

const findLowPosInt = (yourArray) => {
  var outputValue = yourArray[yourArray.length-1]+1;
  for (i=yourArray.length; i >= 0; i--) {
    if ( ( yourArray[i]-yourArray[i-1] ) > 1 ) {
      outputValue = yourArray[i-1]+1;
    }
    console.log('outputValue = ', outputValue);
  }
  return outputValue;
}

var myRandomArray = makeRandomArray(makeRandomNumber());
console.log('myRandomArray = ', myRandomArray);
var sortedArray = sortArray(myRandomArray);
console.log('sortedArray = ', sortedArray);
var final = findLowPosInt(sortedArray);

$(document).ready(function() {
  $('#output-section-1').text(myRandomArray);
  $('#output-section-2').text(sortedArray);
  $('#output-section-3').text(sortedArray);
  });
