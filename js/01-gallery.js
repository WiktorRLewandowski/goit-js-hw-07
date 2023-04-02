import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

// creating clunky markup
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
// adding new elements to DOM
galleryEl.append(...galleryItem);

// creating on-click event
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
  if (event.key === "Escape") {
  }
  console.log(event.key);
});
