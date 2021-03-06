import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery")

function createGallery() {
    const picture = galleryItems.map(el => `<div class="gallery__item"><a class="gallery__link" href="${el.original}"><img src="${el.preview}" class="gallery__image" width="340" alt="${el.description}" 
    data-source="${el.original}"
    ></a></div>`).join("");

    gallery.innerHTML = picture; 
}
createGallery()

gallery.addEventListener("click", loadFullImage);

function loadFullImage(e) {
  e.preventDefault()
  if (e.target.nodeName !== "IMG") {
    return
  }
  const { dataset } = e.target;
  const instance = basicLightbox.create(`<div class="modal">
    <img src="${dataset.source}"  width="800" height="600" alt="${e.target.getAttribute('alt')}"></div>`, { closable: true ,onShow:()=>{addEventListener("keydown",closeEvent)},onClose:()=>{closeEvent(e)}});
  instance.show()

  function closeEvent(e) {
    if (e.code === "Escape") {
      console.log(e.code);
      instance.close();
      
    }removeEventListener("keydown", closeEvent)        
} 
}



// const gallery = document.querySelector(".gallery")
// // data-source="${el.original}"
// function createGallery(e) {
//     const picture = galleryItems.map(el => `<div class="gallery__item"><a class="gallery__link" href="${el.original}"><img src="${el.preview}" class="gallery__image" width="340" alt="${el.description}" 
//     data-source="${el.original}"
//     ></a></div>`).join("");

//     gallery.innerHTML = picture;
   
// }
// document.addEventListener("DOMContentLoaded",createGallery)


// gallery.addEventListener("click", loadFullImage);

// function loadFullImage(e) {
    

//     const picture = galleryItems.find(el => el.description === e.target.getAttribute('alt'));
//     // const findAttribute = galleryItems.find(el => el.original === e.target.dataset.source);   console.log(findAttribute);console.log(e.target.dataset.source);
// //    

//     // console.log(picture);
//     // console.log(e.target.dataset);
//     const createImg = e.target.closest("img");
//     console.log(createImg.src=e.target.dataset.source);
//     console.log(createImg)
//   createImg.setAttribute("src", picture.original);
// e.preventDefault()
// //     // picture.setAttribute("alt", "Amazing nature");
// //     const createBigPicture = `<img src="${picture.original}" width="1280" alt="${picture.description}">`
  
//   const instance = basicLightbox.create(`<div class="modal">
//     <img src="${picture.original}" class="gallery__item" width="1280" alt="${picture.description}"></div>
// `) 
//   instance.show()
//   const visible = instance.visible()

 
//   console.log(instance);
//   if (visible ) {
//     gallery.addEventListener("keydown", function closeEvent(e) {
//     instance.closable=false
//     if (e.code === "Escape") {
//   console.log(e.code);
//     instance.close()
//     gallery.removeEventListener("keydown",closeEvent)
//   }
   
// });

//   }
// }