document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);
    const formMessage = document.getElementById('form-message');  // Ensure you have an element for feedback

    try {
        // Send the form data to Google Forms
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            mode: 'no-cors',  // Allow cross-origin requests
        });

        // Display success message right after the form submission
        formMessage.style.display = 'block';
        formMessage.innerHTML = '<div class="alert alert-success">Your submission has been received! Thank you.</div>';

        // Optionally reset the form fields
        form.reset();

        // Hide the success message after a short delay (for UX purposes)
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    } catch (error) {
        console.error('Error:', error);
        formMessage.style.display = 'block';
        formMessage.innerHTML = '<div class="alert alert-danger">There was an error submitting your form. Please try again.</div>';
    }
});

