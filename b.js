//Write a function that takes an array of words and returns the longest word. Use the reduce() array method in your implementation.

function searchLongestWord(words) {
  const longestWord = words.reduce((longest, current) => {
      if (current.length > longest.length) {
        return current;
      } else {
        return longest;
      }
    }, words[0]); 
    return longestWord;
  }
  
  
  let wordArray = ["apple", "banana", "cherry", "date","strawberry "];
  
  console.log(searchLongestWord(wordArray))
  