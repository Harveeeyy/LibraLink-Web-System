document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value; // Corrected to 'username'
    const password = document.getElementById('password').value; // Corrected to 'password'
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = 'Passwords do not match';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    try {
        const response = await fetch('signup.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, confirmPassword })
        });

        const data = await response.json();

        if (data.success) {
            window.location.href = 'login.html'; // Redirect to login
        } else if (data.error) {
            document.getElementById('errorMessage').textContent = data.error;
            document.getElementById('errorMessage').style.display = 'block';
        }
    } catch (error) {
        console.error('Error during signup:', error);
    }
});
