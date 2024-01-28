document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(function(accordion) {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.paddingTop = 0;
                panel.style.paddingBottom = 0;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.style.paddingTop = '18px';
                panel.style.paddingBottom = '18px';
            }
        });
    });
});
