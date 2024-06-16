window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    backgroundSlide.style.backgroundPositionY = scrollPosition * 0.5 - 220 + 'px';
	
	var parallax = document.querySelector('.parallax-background');
    parallax.style.backgroundPositionY = scrollPosition * -0.4 - 220 + 'px';
});

2,79
2,06
0