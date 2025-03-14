document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '/header1.webp', 
        '/header2.webp', 
        '/header3.webp'
    ];
    
    const backgroundDiv = document.querySelector('.rotating-background');

    // Dynamically create layers for each background image
    images.forEach((imageSrc, index) => {
        const layer = document.createElement('div');
        layer.classList.add('background-layer');
        layer.style.backgroundImage = `url(${imageSrc})`;
        if (index === 0) layer.classList.add('active');
        backgroundDiv.appendChild(layer);
    });

    // Preload the images
    images.slice(1).forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let currentIndex = 0;
    const layers = document.querySelectorAll('.background-layer');

    // Function to change the background
    function changeBackground() {
        layers[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % layers.length;
        layers[currentIndex].classList.add('active');
    }

    // Change the background every 5 seconds
    setInterval(changeBackground, 5000);
});
