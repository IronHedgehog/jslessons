const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

const firstChildNode = bodyElement.firstElementChild;
const lastChildNode = bodyElement.lastElementChild;

// console.log(firstChildNode);
// console.log(lastChildNode);

const childNodes = bodyElement.childNodes;
// console.log(childNodes);

// childNodes.forEach((childNode) => console.log(childNode));

// console.log(bodyElement.hasChildNodes());

const previusSibling = bodyElement.previousElementSibling;
const parentSibling = bodyElement.parentElement;
const nextSibling = bodyElement.nextElementSibling;
// console.log(previusSibling);
// console.log(parentSibling);
// console.log(nextSibling);

const image = document.querySelector(".image");
const image2 = document.querySelectorAll(".itme");
const image1 = document.getElementById("2");

image.src = "";

// ЗАНЯТТЯ 2

const text = document.querySelector("#text");
const list = document.getElementById("list");

// console.log(text.textContent);

// text.textContent = "Hello world";

// list.classList.add("list");

// list.classList.remove("list");

// console.log(list.classList.contains("list"));

// list.style.listStyle = "none";

text.style.fontSize = "50px";

// console.log(image.hasAttributes(""));

// console.log(image.getAttribute("src"));

// console.log(image.removeAttribute("height"));

// console.log(image.setAttribute("height", "320"));

// console.log(image.attributes);

// Створення

const div = document.createElement("div");
// const li = document.createElement("li");
// const li1 = document.createElement("li");
// const li3 = document.createElement("li");

// console.log(div);

div.textContent = "Привіт, я DIV";

div.style.fontSize = "50px";

console.log(div);

bodyElement.append(div);
bodyElement.prepend(div);
list.after(div);
list.before(div);

div.remove();

// list.append(li, li1, li3);

//

const user = ["asd", "zxcczx", "qweqwe", "jkajkjk"];

const markupList = user.map((user) => `<li>${user}</li>`).join(" ");

list.insertAdjacentHTML("beforeend", markupList);

const goods = [
  { name: "milk", price: 20 },
  { name: "bred", price: 20 },
  { name: "water", price: 20 },
  { name: "pear", price: 20 },
];

const orderList = goods
  .map(
    ({ name, price }) => `<li> назва товару:${name}, ціна товару ${price} </li>`
  )
  .join(" ");

// list.innerHTML = "";

list.insertAdjacentHTML("beforeend", orderList);
