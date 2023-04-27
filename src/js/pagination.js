import axios from 'axios';

// fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Все погано');
//     }
//     return response.json();
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// async function fetch() {
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/comments'
//     );
//     const formatedData = response.data;
//     return formatedData;
//   } catch (error) {
//     if (error.code === 'ERR_NETWORK') {
//       console.log(1);
//     }
//   }
// }
// fetch();
