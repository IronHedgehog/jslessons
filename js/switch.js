const sub1 = "starter";
const sub2 = "pro";
const sub3 = "pro+";
const sub4 = "pro++";

let cost;

switch ("asdasd") {
  case "pro":
    cost = 10;
    break;

  case "pro+":
    cost = 15;
    break;

  case "starter":
    cost = 0;
    break;

  default:
    console.log('"Server Error" :>> ', "Server Error");
    break;
}

console.log("cost :>> ", cost);
