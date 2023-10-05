//Write a function that takes an array of objects representing books, with each object containing properties such as title, author, and pages. The function should return the average number of pages across all the books. Use the map() and reduce() array methods in your implementation.

function averagePages(books) {
    if (books.length == 0) {
      return 0; 
    }
  
    let pageNumbers = books.map(book => book.pages);
  
    let totalPages = pageNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
     return totalPages / books.length;
  }
  
  const books = [
    { title: "Book 1", author: "Author 1", pages: 200 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 300 },
  ];
  
  const average = averagePages(books);
  console.log(`Average number of pages: ${average}`);
  




