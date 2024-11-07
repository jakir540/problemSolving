// 1. Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const persons = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Eve", age: 40, gender: "female" },
  { name: "Frank", age: 22, gender: "male" },
];

const FemaleChecker = (persons) => {
  //   console.log(person);

  return persons
    .filter((person) => person.gender == "male")
    .map((person) => person.name);
};

const result = FemaleChecker(persons);
console.log(result);

// 2. Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
  { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
];

const getBookTitles = (books) => {
  console.log(books);

  const bookTitleArray = books.map((book) => book.title);
  return bookTitleArray;
};

const result2 = getBookTitles(books);
console.log(result2);

// 3. Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5
function Square(num) {
  return num * num;
}
function Double(num) {
  return num * 2;
}
function AddFive(num) {
  return num + 5;
}
function ComposeFun(num) {
  const square = Square(num);
  const double = Double(square);
  const addFive = AddFive(double);
  return addFive;
}

const result3 = ComposeFun(10);
console.log(result3);

// 4. Write a function that determines whether a given year is a leap year.

// Example: Happy New Year

function LeapYearChecker(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const year = 2024;

if (LeapYearChecker(year)) {
  console.log("Happy New Year");
} else {
  console.log(`${year} is not a leap year.`);
}

// 5. Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [3, 7, 2, 7, 3, 10, 15, 2, 6, 10, 3];

function UniqueNumberChecker(numbers) {
  return [...new Set(numbers)];
}

const result5 = UniqueNumberChecker(numbers);
console.log(result5);
