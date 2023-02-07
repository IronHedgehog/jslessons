const user = {
  firstName: "Artem",
  lastName: "12312",
  age: 22,
  location: {
    country: "Ukraine",
    city: "Kharkiv",
  },
  stats: {
    follover: 1000000,
    likes: 100000,
  },
};

// for in

// for (const key in user) {
//   console.log(user[key]);
// }

// const client = Object.create(user);

// client.a = 5;
// console.log("client :>> ", client);
// for (const key in client) {
//   if (Object.hasOwnProperty(key)) {
//     console.log("clietn[key] :>> ", client[key]);
//   }
// }

// console.log("client :>> ", client);

//  Object keys

const a = Object.keys(user);
// console.log("keys :>> ", a);

// Object values

const b = Object.values(user);
// console.log("values :>> ", b);

// Object entries

const c = Object.entries(user);
// console.log("entries :>> ", c);

const users = [
  {
    firstName: "Artem",
    lastName: "12312",
    age: 27,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 40,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 16,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 18,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 21,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 22,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 23,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 17,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
  {
    firstName: "Artem",
    lastName: "12312",
    age: 21,
    location: {
      country: "Ukraine",
      city: "Kharkiv",
    },
    stats: {
      follover: 1000000,
      likes: 100000,
    },
  },
];

function calculateMiddleAge(users) {
  const ages = [];
  let total = 0;

  for (const user of users) {
    ages.push(user.age);

    total += user.age;
  }
  const result = total / ages.length;

  return Number(result.toFixed(1));
}

const result = calculateMiddleAge(users);
// console.log("result :>> ", result);

const user2 = {
  firstName: "Artem",
  lastName: "12312",
  age: 40,
  location: {
    country: "Ukraine",
    city: "Kharkiv",
  },
  stats: {
    follover: 1000000,
    likes: 100000,
  },
};
function hello({ firstName, lastName, location: { country, city } }) {
  // const {
  //   firstName,
  //   lastName,
  //   location: { country, city },
  // } = user;

  console.log(
    "object :>> ",
    `Привіт ${firstName} 
  ${lastName} 
  чи дійсно ви знаходитесь у місці 
  ${country}, 
  ${city}`
  );
}

hello(user2);
