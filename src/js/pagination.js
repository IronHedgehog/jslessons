import axios from 'axios';

const params = new URLSearchParams({
  _limit: 20,
  _page: 5,
  per_page: 40,
});

const page = 10;

const posts = fetch(`https://pixabay.com/api?${params}`)
  // key=2313214498&q=adasd&
  .then(response => response.json())
  .then(json => console.log(json));

const pag = 500 / 20;
console.log(pag);
