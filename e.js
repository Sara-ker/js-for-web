//Write a function that takes an array of objects representing people, with each object containing properties such as name, age, and city. The function should return an object containing the count of people by city. For example, if the input is [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Chicago" }, { name: "Charlie", age: 50, city: "New York" }], the output should be { "New York": 2, "Chicago": 1 }. Use the reduce() array method in your implementation.
const people = [
    { name: "Sara", age: 30, city: "Alger" },
    { name: "Youcef", age: 40, city: "Alger" },
    { name: "Dalia", age: 50, city: "Tokyo" }
  ];
  

function countPeopleCity (people){

    return people.reduce((numberOfPeople,person) => {

        const { city } = person; //deconstructing
        if (numberOfPeople[city]) {
            numberOfPeople[city]++;
          } else {
            numberOfPeople[city] = 1;
          }
          
          return numberOfPeople;
        }, {});
      }

      console.log(countPeopleCity (people))

  
