// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var modalBtn = document.getElementById('modalBtn');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
modalBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
