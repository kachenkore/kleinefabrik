document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Add your form validation and submission logic here.
    // ...

    // After form submission logic
    // Hide the submit button
    var submitButton = document.querySelector('#contactForm button[type="submit"]');
    submitButton.style.display = 'none';

    // Create a thank you message
    var thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your submission!';
    thankYouMessage.style.color = '#F01368'; // Dark Blue color
    thankYouMessage.style.textAlign = 'center';
    thankYouMessage.style.marginTop = '20px';

    // Append thank you message to the form container
    document.getElementById('contactForm').appendChild(thankYouMessage);
});
