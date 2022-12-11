import { galleryItems } from './gallery-items.js';

const listGallery = document.querySelector('.gallery');

function createMarcupGallery(items){
   return items.map((item) => {
        return `<div class="gallery__item">
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
      </div>`
    }).join('');
};

const addMarcupGallery = createMarcupGallery(galleryItems);

listGallery.innerHTML = addMarcupGallery;

listGallery.addEventListener('click', onOpenCollection);

function onOpenCollection(evt){
    evt.preventDefault();
    
    new SimpleLightbox('div a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });
    
}
