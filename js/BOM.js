// console.log("object :>> ", navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
  console.log("Наш юзер працює з хрома");
} else if (navigator.userAgent.includes("Firefox")) {
  console.log("Наш юзер працює з Firefox");
}

console.log(navigator.platform);

console.log(location.href);

// location.href = "https://goiteens.com/";

history.back();
history.forward();

console.log("history :>> ", history);

// history.go();
