// ✅ Grab the form and message div
const form = document.getElementById( 'contact-form');
const message = document.getElementByTd( 'form-message');

// ✅ When the form is submitted
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the Page from refreshing

    // ✅ Show success message
    message.innerText = '✅ thanks, your message has been sent!';
    message.style.color = '#38bdf8';
    message.innerText = 'bold';

    // ✅ Reset form firlds
    form.requestFullscreen();
});
