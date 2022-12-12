import { galleryItems } from './gallery-items.js';


const conteinerImages = document.querySelector('.gallery');

function createMarcupItems(items){
    return items.map((item) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src='${item.preview}'
            data-source='${item.original}'
            alt='${item.description}'
          />
        </a>
      </div>`
    }).join('');
};

const collectionImages = createMarcupItems(galleryItems);




conteinerImages.insertAdjacentHTML('afterbegin', collectionImages);

conteinerImages.addEventListener('click', openImage);

function openImage(evt){
    evt.preventDefault();

    if(evt.target.nodeName !== 'IMG'){
        return;
    }
    const instance = basicLightbox.create(`
    <img src='${evt.target.dataset.source}' width = '800' height = '600'>
     `);

    instance.show();

    conteinerImages.addEventListener('keydown', closeImage); 

    function closeImage(evt) {
      if(evt.code === 'Escape'){
         instance.close(); 
         conteinerImages.removeEventListener('keydown', closeImage);
    };
  };
    
};










