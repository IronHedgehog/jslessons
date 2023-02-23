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
console.log(previusSibling);
console.log(parentSibling);
console.log(nextSibling);

const image = document.querySelector(".image");
const image2 = document.querySelectorAll(".itme");
const image1 = document.getElementById("2");

console.log(image2[2]);

image.src = "";
