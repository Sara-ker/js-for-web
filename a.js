//Write a function that takes an array of numbers and returns the average of all the even numbers. Use the filter() and reduce() array methods in your implementation.


function averageOfEvenNumbers (array){

const newArray = array.filter((number) => number%2 == 0);

const sum = newArray.reduce((accumulator,currentValue)=> accumulator+currentValue,0);

if (newArray.length > 0) {
    return sum / newArray.length;
  } else {
    return 0;
}
}


const numbers = [1, 2, 3, 4, 5, 6];
const average =averageOfEvenNumbers(numbers) ;
console.log(average);
