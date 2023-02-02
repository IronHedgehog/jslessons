//  Приклади обьектів


const computer = {
  monitor: "samsung",
  mouse: "якась миша",
  keyboard: "klavatura",
};

const book = {
  title: "nazva knigi",
  author: "Artem",
  genre: ["adventure", "detective"],
  rating: 5,
};

// const user = {
//   firstName: "Artem",
//   lastName: "12312",
//   age: 22,
//   location: {
//     country: "Ukraine",
//     city: "Kharkiv",
//   },
//   stats: {
//     follover: 1000000,
//     likes: 100000,
//   },
// };

// Звернення до властивостей

// let name = user.firstName;
// let country = user.location.country;

// const asdasd = user["country"];

// user.age = 23;

// user.role = "administrator";

// console.log("user :>> ", user);

// console.log("asdasd :>> ", asdasd);

// console.log("country :>> ", country);

// console.log("name :>> ", name);

// Короткі властивості

const name = "Artem";
const lastName = "asdasd";
const age = 25;

let user = {
  name,
  lastName,
  age,
};

// console.log("user :>> ", user);

// Методи об'єкта

const bookShelf = {
  books: ["kniga1", "kniga2"],

  getBooks() {
    console.log("getBooks :>> ", "цей метод поверне усі книги");
  },

  addBooks(bookName) {
    this.books.push(bookName);
  },
};

console.log("bookShelf :>> ", bookShelf);

bookShelf.getBooks();
bookShelf.addBooks("kniga3");
