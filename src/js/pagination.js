const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

// const APIKEY = '1Tzj1AqHPQoo0k9AET8HkQMHIUOGPgAP';

function fetchEvents(pages = 0) {
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=1Tzj1AqHPQoo0k9AET8HkQMHIUOGPgAP&page=${pages}&size=20`
  )
    .then(response => response.json())
    .then(json => console.log(json));
}

const buttonContainer = document.querySelector('#bigDiv');

buttonContainer.addEventListener('click', pagination);

function pagination(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  fetchEvents(e.target.textContent);
}
