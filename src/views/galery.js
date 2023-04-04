import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createLiImg } from '../js/renderHtml';

const refs = {
  list: document.querySelector('.list'),
};

refs.list.insertAdjacentHTML('beforeend', createLiImg());

let lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
