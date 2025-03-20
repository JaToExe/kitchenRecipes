"use strict";

const previousButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideElement = document.querySelector('.slide');

let currentImageNumber = 1;
const totalImages = 3;

const imagePaths = [
    "../assets/slider/anna-pelzer-IGfIGP5ONV0-unsplash.jpg",
    "../assets/slider/brooke-lark-oaz0raysASk-unsplash.jpg",
    "../assets/slider/davide-cantelli-jpkfc5_d-DI-unsplash.jpg"
];

const preloadImages = () => {
    imagePaths.forEach((path) => {
        const image = new Image();
        image.src = path;
    });
};

window.onload = function () {
    preloadImages();
    slideElement.className = `slide slide${currentImageNumber}`;
    startAutoSlideChange();
};

nextButton.addEventListener('click', () => {
    if (currentImageNumber < totalImages) {
        currentImageNumber++;
    } else {
        currentImageNumber = 1;
    }
    updateSlide();
    resetAutoSlideChange();
});

previousButton.addEventListener('click', () => {
    if (currentImageNumber > 1) {
        currentImageNumber--;
    } else {
        currentImageNumber = totalImages;
    }
    updateSlide();
    resetAutoSlideChange();
});

function updateSlide() {
    slideElement.className = `slide slide${currentImageNumber}`;
}

let autoSlideInterval;

function startAutoSlideChange() {
    autoSlideInterval = setInterval(() => {
        if (currentImageNumber < totalImages) {
            currentImageNumber++;
        } else {
            currentImageNumber = 1;
        }
        updateSlide();
    }, 5000); 
}

function resetAutoSlideChange() {
    clearInterval(autoSlideInterval);
    startAutoSlideChange();
}
