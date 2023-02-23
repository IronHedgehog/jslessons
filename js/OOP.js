// const salary = 10000;
// const rate = 5;

// const getWage = (salary, rate) => {
//
// };

// console.log(getWage(salary, rate));

const worker = {
  salary: 10000,
  rate: 5,
  getWage() {
    console.log(this.salary * this.rate);
  },
};

class Human {
  #password;

  constructor({ name, lastname, age, email, password }) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.#password = password;
  }

  hello() {
    console.log(`Привіт я клас людина ${this.name} ${this.lastname}`);
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }

  changeAge(newAge) {
    this.age = newAge;
  }
}

const artem = new Human({
  name: "Artem",
  lastname: "Faust",
  age: 23,
  email: "asdasd@asd.com",
  password: "123",
});

artem.changeAge(24);

console.log("artem :>> ");

class Worker extends Human {
  #kod;
  #number;

  constructor({ name, lastname, age, email, password, kod, number }) {
    super({ name, lastname, age, email, password });
    this.#kod = kod;
    this.#number = number;
  }

  hello() {
    console.log(`Привіт, я воркер ${name} `);
  }

  get kod() {
    return this.#kod;
  }

  set kod(newKod) {
    if (newKod === "") {
      console.error("Помилка! Kod не може бути пустим!");
      return;
    }

    this.#kod = newKod;
  }
}

const worker1 = new Worker({
  name: "Artem",
  lastname: "Faust",
  age: 23,
  email: "asdasd@asd.com",
  password: "123",
  kod: 4654646466,
  number: 757557,
});

worker1.kod = 1;

console.log("worker1 :>> ", worker1.kod);

class It extends Worker {
  #level;
  #language;

  constructor({
    name,
    lastname,
    age,
    email,
    password,
    kod,
    number,
    level,
    language,
  }) {
    super({ name, lastname, age, email, password, kod, number });
    this.#language = language;
    this.#level = level;
  }

  hello() {
    console.log(`Привіт, я It ${this.name} `);
  }
}

const programer = new It({
  name: "Artem",
  lastname: "Faust",
  age: 23,
  email: "asdasd@asd.com",
  password: "123",
  kod: 4654646466,
  number: 757557,
  level: "mid",
  language: "js",
});

console.log("object :>> ", programer);

const humanList = [artem, worker1, programer];

function bigHello(humanList) {
  for (let i = 0; i < humanList.length; i++) {
    const human = humanList[i];
    human.hello();
  }
}

bigHello(humanList);
