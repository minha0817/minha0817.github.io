const images = ["5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];

const randomImages = images[Math.floor(Math.random()*images.length)];

const container = document.getElementById("container");


const bgImage = document.createElement("img");

bgImage.src = `images/${randomImages}`;



container.appendChild(bgImage);