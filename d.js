//Write a function that takes an array of strings and returns an object containing the frequency of each string. For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }. Use the reduce() array method in your implementation.

function countStringFrequency(strings) {
    return strings.reduce((frequencyObject, currentString) => {
      if (frequencyObject[currentString]) {

        frequencyObject[currentString]++;
      } else {
        
        frequencyObject[currentString] = 1;
      }
      return frequencyObject;
    }, {});
  }
  

  let inputStrings = ["hello", "world", "hello","cut","cat","dog"];
 let frequencyObject = countStringFrequency(inputStrings);
  console.log(frequencyObject);
  