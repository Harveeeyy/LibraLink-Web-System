document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
    }
});
