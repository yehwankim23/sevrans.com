const count = 12;
let images = [];

for (let index = 0; index < count; index++) {
  images[index] = new Image();
  images[index].src = `images/about-3-${index + 1}.jpeg`;
}

let index = Math.floor(Math.random() * count);
const image = document.querySelector("#image");
image.src = images[index].src;

document.querySelector("#previous").addEventListener("click", () => {
  index = index === 0 ? 11 : index - 1;
  image.src = images[index].src;
});

document.querySelector("#next").addEventListener("click", () => {
  index = index === 11 ? 0 : index + 1;
  image.src = images[index].src;
});
