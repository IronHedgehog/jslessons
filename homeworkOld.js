// Створити класс Сar який буде містити поля brand,model,price. додати до класу
// метод який повертає ціну та метод який може дозволити змінювати ціну.
// додати приватну властивість engine
// додати до неї гетери та сетери (переглянути класс Worker який ми писали на уроці)

class User {
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    (this.#email = email), (this.#role = role);
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    if (newRole === "") {
      console.log("Такої ролі не існує");
    }

    this.#role = newRole;
  }
}

const artem = new User({ email: "asdasd@gmail.com", role: User.Roles.ADMIN });

console.log(artem.Roles);
console.log(User.Roles);

// console.log(artem.role);
artem.role = User.Roles.EDITOR;
console.log(artem.role);

// задача яку обіцяв

const arr = [1, 2, 3, 4, 5];

Array.prototype.mnoz = function (n) {
  return this.map(function (number) {
    return number * n;
  });
};

// console.log([3, 76, 2, 3, 5].mnoz(2));

// console.log(arr.mnoz(10));

// спробуйте тепер використовувати в інших файлах функцію mnoz якби ви зазвичай використовували якийсь метод масиву
// вказуючи параметром на яке число множити елементи
// const arr = [1, 2, 3, 4, 5].mnoz(2);
