import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const galleryItem = [];
galleryItems.forEach((item) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let anchor = document.createElement("a");
  let url = item.preview;
  let alt = item.description;
  let zoom = item.original;
  li.classList.add("gallery__item");
  anchor.classList.add("gallery__link");
  img.classList.add("gallery__image");
  anchor.setAttribute("href", zoom);
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
  img.dataset.source = zoom;
  li.append(anchor);
  anchor.append(img);
  galleryItem.push(li);
});
galleryEl.append(...galleryItem);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = event.target.dataset.source;
  basicLightbox.create(`<img src="${instance}"/>`).show();
  console.log(event.target.dataset.source);
});

galleryEl.addEventListener("keydown", (event) => {
  event.preventDefault();
  let lightbox = document.querySelector("div.lightBox");
  if (event.key === "Escape") {
    lightbox.outerHTML = "";
  }
  console.log(event.key);
});
