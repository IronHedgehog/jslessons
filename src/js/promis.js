const value = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (value) {
      resolve('Відповідь є');
    } else {
      reject('Відповіді нема');
    }
  }, 1000);
});

promise
  .then(value => console.log('value :>> ', value))
  .catch(err => console.log('err :>> ', err))
  .finally(history.push(index.html));
