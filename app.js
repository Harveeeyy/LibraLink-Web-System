document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    try {
        const response = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            window.location.href = "dashboard.html"; // Redirect to dashboard upon successful login
        } else {
            const data = await response.json();
            errorMessage.textContent = data.message || "Login failed. Please check your credentials.";
        }
    } catch (error) {
        errorMessage.textContent = "An error occurred. Please try again.";
    }
});
