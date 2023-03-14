const number = document.querySelector("#number");
let events = 0;

document.addEventListener("scroll", _.debounce(onScroll, 300));

function onScroll(e) {
  events += 1;
  console.log("e :>> ", e);

  number.textContent = events;
}

console.log("window :>> ", window);
