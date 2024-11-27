document.addEventListener("DOMContentLoaded", () => {
    // Check if the login form is submitted
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("username").value;  // Get username
        const password = document.getElementById("password").value;  // Get password

        const errorMessage = document.getElementById("errorMessage"); // Get the error message element
        
        // Debugging: Console log to see if the values are correct
        console.log("Username:", username);
        console.log("Password:", password);

        // Validate username and password
        if (username === "admin" && password === "password") {
            // Hide error message if login is successful
            errorMessage.style.display = "none"; 
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "dashboard.html";  // Redirect to dashboard
        } else {
            // Display error message if login fails
            errorMessage.textContent = "Invalid username or password"; 
            errorMessage.style.display = "block";  // Show error message
        }
    });
});
