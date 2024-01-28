document.getElementById('loadMore').addEventListener('click', function() {
    var events = document.querySelectorAll('.event');
	    
var hiddenEvents = Array.from(events).filter(event => {
    var computedStyle = window.getComputedStyle(event);
    return computedStyle.getPropertyValue('display') === 'none';
});   

    hiddenEvents.slice(0, 3).forEach(event => event.style.display = 'block');

    // Log how many events are shown after the click
    var newHiddenEventsCount = Array.from(events).filter(event => event.style.display === 'none').length;

    // Hide the 'Show More' button if all events are visible
    if (hiddenEvents.length <= 3) {
        this.style.display = 'none';
    }
});
