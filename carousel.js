var backgroundImages = [
    "top.jpg",
    "top1.jpg",
    "top2.jpg",
	"top3.jpg"
];

var currentIndex = 0;
var backgroundSlide = document.querySelector(".background-slide");

function changeBackground() {
    backgroundSlide.style.opacity = 0;
    setTimeout(function() {
        backgroundSlide.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        backgroundSlide.style.opacity = 1;
    }, 1000); // Change image every 1 second (adjust as needed)
}

// Initial call to start the carousel
changeBackground();

// Set an interval to change the background periodically
setInterval(changeBackground, 5000); // Change image every 5 seconds (adjust as needed)
