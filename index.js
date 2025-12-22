// Contact form submission
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
        formResponse.style.color = "green";
        contactForm.reset();
    } else {
        formResponse.textContent = "Please fill in all fields.";
        formResponse.style.color = "red";
    }
});