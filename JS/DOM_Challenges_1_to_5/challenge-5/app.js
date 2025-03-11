// Image data
const images = [
    {
        url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Beautiful Mountain Landscape',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Ocean Sunset View',
    },
    {
        url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Autumn Forest Path',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Urban City Skyline',
    },
];

const carousel = document.getElementById('carousel');
const carouselTrack = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay');

let currentImageIndex = 0;
let autoPlayInterval;
let autoPlayActive = false;

function updateCaption() {
    caption.textContent = images[currentImageIndex].caption;
}

function createCarousel() {
    images.forEach((image, index) => {
        const slide = document.createElement('img');
        slide.src = image.url;
        slide.classList.add('carousel-slide');
        carouselTrack.appendChild(slide);

        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => showSlide(index));
        carouselNav.appendChild(indicator);
    });

    updateCaption();
}

const nextAndPrevImage = (OPERATION) => {
    if (OPERATION === 'NEXT') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (OPERATION === "PREV") {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
    const indicators = document.querySelectorAll('.carousel-indicator');
    carouselTrack.style.transform = `translateX(-${currentImageIndex * 100}%)`;

    indicators.forEach((indicator, i) =>
        indicator.classList.toggle('active', i === currentImageIndex),
    );

    updateCaption();
}

function toggleAutoPlay() {
    if (autoPlayActive) {
        clearInterval(autoPlayInterval);
        autoPlayButton.textContent = 'Start Auto Play';
        timerDisplay.textContent = '';
    } else {
        let countdown = 5;
        timerDisplay.textContent = `Next in: ${countdown}s`;

        autoPlayInterval = setInterval(() => {
            countdown--;
            timerDisplay.textContent = `Next in: ${countdown}s`;
            if (countdown === 0) {
                nextAndPrevImage("NEXT");
                countdown = 5;
            }
        }, 1000);

        autoPlayButton.textContent = 'Stop Auto Play';
    }

    autoPlayActive = !autoPlayActive;
}

nextButton.addEventListener('click', () => nextAndPrevImage("NEXT"));
prevButton.addEventListener('click', () => nextAndPrevImage("PREV"));
autoPlayButton.addEventListener('click', toggleAutoPlay);

createCarousel();