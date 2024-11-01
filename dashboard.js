document.addEventListener("DOMContentLoaded", function () {
    // Redirect to login if not logged in
    //if (!sessionStorage.getItem("isLoggedIn")) {
    //    window.location.href = "login.html";
        return;
    //}

    // Load dashboard data if logged in
    loadDashboardData();

    document.getElementById("logoutButton").addEventListener("click", function () {
        // Clear session storage and redirect to login
        sessionStorage.clear();
        window.location.href = "login.html";
    });
});

async function loadDashboardData() {
    try {
        // Fetch user and book data from backend
        const userDataResponse = await fetch("http://localhost:8080/api/user");
        const booksDataResponse = await fetch("http://localhost:8080/api/books");

        if (userDataResponse.ok && booksDataResponse.ok) {
            const userData = await userDataResponse.json();
            const booksData = await booksDataResponse.json();

            document.getElementById("username").textContent = userData.username;

            // Populate borrowed books
            const borrowedBooksList = document.getElementById("borrowedBooksList");
            borrowedBooksList.innerHTML = "";
            userData.borrowedBooks.forEach(book => {
                const li = document.createElement("li");
                li.textContent = `${book.title} by ${book.author}`;
                borrowedBooksList.appendChild(li);
            });

            // Populate available books
            const availableBooksList = document.getElementById("availableBooksList");
            availableBooksList.innerHTML = "";
            booksData.availableBooks.forEach(book => {
                const li = document.createElement("li");
                li.textContent = `${book.title} by ${book.author}`;
                availableBooksList.appendChild(li);
            });

        } else {
            console.error("Failed to load dashboard data.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}