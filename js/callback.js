// ДЗ
const user = {
  name: "Artem",
  lastName: "Faust",
  age: 23,
  location: {
    country: "Ukraine",
    city: "Kharkiv",
  },
};

function helloUser(user) {
  const {
    name,
    lastName,
    age,
    location: { country, city },
  } = user;
  console.log(
    "`object` :>> ",
    `Привіт ${name} ${lastName} ${age} ${country} ${city}`
  );
}

//  ----------------------------------------------------

// console.log("object :>> ", helloUser);

// function chating(name, online, offline) {
//   const isOnline = Math.random() > 0.5;

//   if (!isOnline) {
//     offline(name);
//   }

//   if (isOnline) {
//     online(name);
//   }
// }

// function isOnline(name) {
//   console.log("object :>> ", `Привіт, ${name} онлайн`);
// }

// function offlane(name) {
//   console.log("object :>> ", `Привіт, ${name} офлайн`);
// }

// chating("Artem", isOnline, offlane);

// ----------------------------------------------------------

// inline callback

function chating(name, online, offline) {
  const isOnline = Math.random() > 0.5;

  if (!isOnline) {
    offline(name);
  }

  if (isOnline) {
    online(name);
  }
}

chating("Artem", function online(name) {
  console.log("object :>> ", `Привіт, ${name} онлайн`);
});
