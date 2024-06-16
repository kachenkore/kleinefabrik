window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var backgroundSlide = document.querySelector('.background-slide');
    backgroundSlide.style.backgroundPositionY = (scrollPosition - 230) * 0.5 + 'px';
});
