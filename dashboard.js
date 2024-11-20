document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("isLoggedIn")) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("logoutButton").addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "login.html";
    });
});
