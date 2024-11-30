// Get references to elements
const container = document.querySelector('.form-container');
const goToSignup = document.getElementById('goToSignup');
const goToLogin = document.getElementById('goToLogin');

// Switch to signup form
goToSignup.addEventListener('click', () => {
  container.classList.add('active');
});

// Switch to login form
goToLogin.addEventListener('click', () => {
  container.classList.remove('active');
});
