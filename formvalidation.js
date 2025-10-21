document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const successMsg = document.getElementById('successMsg');

  // Error elements
  const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message'),
  };

  // Reset
  Object.values(errors).forEach(err => err.textContent = '');
  successMsg.textContent = '';

  // Validation
  let valid = true;
  if (!name.value.trim()) {
    errors.name.textContent = 'Full name is required.';
    valid = false;
  }

  if (!email.value.trim()) {
    errors.email.textContent = 'Email is required.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (!subject.value.trim()) {
    errors.subject.textContent = 'Subject is required.';
    valid = false;
  }

  if (!message.value.trim()) {
    errors.message.textContent = 'Message is required.';
    valid = false;
  } else if (message.value.trim().length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  // Success
  if (valid) {
    successMsg.textContent = 'Thank you! Your message has been submitted successfully.';
    this.reset();
  }
});
