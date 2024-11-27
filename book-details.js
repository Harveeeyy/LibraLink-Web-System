document.addEventListener("DOMContentLoaded", () => {
    // Get book data from localStorage
    const book = JSON.parse(localStorage.getItem("selectedBook"));
    
    // Check if book data exists
    if (book) {
        // Populate the book details on the page
        document.getElementById("bookTitle").textContent = book.title;
        document.getElementById("bookAuthor").textContent = `By ${book.author}`;
        document.getElementById("bookDescription").textContent = book.description || "No description available.";
    } else {
        // If no book data, redirect to the dashboard
        window.location.href = "dashboard.html";
    }

    // Add event listener to back button
    document.getElementById("backButton").addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });
});
