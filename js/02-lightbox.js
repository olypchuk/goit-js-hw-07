import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

function createGallery() {
    
    const createImg = galleryItems.map(({ original, preview, description }) =>
        `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a></li>`).join("")

    gallery.insertAdjacentHTML("afterbegin", createImg);
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" })

   
}


document.addEventListener("DOMContentLoaded", createGallery)

