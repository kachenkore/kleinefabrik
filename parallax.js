window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    backgroundSlide.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
	
	var parallax = document.querySelector('.parallax-background');
    parallax.style.backgroundPositionY = scrollPosition * -0.3 + 'px';
});
