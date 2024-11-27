document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("isLoggedIn")) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("logoutButton").addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "login.html";
    });

    // Sample book data (replace with actual data from your backend)
    const featuredBooks = [
        { title: "Featured Book 1", author: "Author 1", description: "This is a detailed description for Featured Book 1." },
        { title: "Featured Book 2", author: "Author 2", description: "This is a detailed description for Featured Book 2." },
        { title: "Featured Book 3", author: "Author 3", description: "This is a detailed description for Featured Book 3." },
        { title: "Featured Book 4", author: "Author 4", description: "This is a detailed description for Featured Book 4." },
        { title: "Featured Book 5", author: "Author 5", description: "This is a detailed description for Featured Book 5." }
    ];

    const recommendedBooks = [
        { title: "Recommended Book 1", author: "Author A", description: "This is a detailed description for Recommended Book 1." },
        { title: "Recommended Book 2", author: "Author B", description: "This is a detailed description for Recommended Book 2." },
        { title: "Recommended Book 3", author: "Author C", description: "This is a detailed description for Recommended Book 3." },
        { title: "Recommended Book 4", author: "Author D", description: "This is a detailed description for Recommended Book 4." },
        { title: "Recommended Book 5", author: "Author E", description: "This is a detailed description for Recommended Book 5." },
        { title: "Recommended Book 6", author: "Author F", description: "This is a detailed description for Recommended Book 6." },
        { title: "Recommended Book 7", author: "Author G", description: "This is a detailed description for Recommended Book 7." },
        { title: "Recommended Book 8", author: "Author H", description: "This is a detailed description for Recommended Book 8." }
    ];

    // Function to display books in a grid
    function displayBooks(bookList, targetElementId) {
        const bookGrid = document.getElementById(targetElementId);
        bookGrid.innerHTML = "";  // Clear existing books

        bookList.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.addEventListener("click", () => showBookDetails(book)); // Add event listener for clicks on books

            const bookThumbnail = document.createElement("div");
            bookThumbnail.classList.add("book-thumbnail");

            const bookTitle = document.createElement("p");
            bookTitle.textContent = book.title;

            const bookDescription = document.createElement("p");
            bookDescription.classList.add("book-description");
            bookDescription.textContent = `By ${book.author}`;

            bookCard.appendChild(bookThumbnail);
            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookDescription);
            bookGrid.appendChild(bookCard);
        });
    }

    // Function to show book details when clicked
    function showBookDetails(book) {
        // Store book details in localStorage
        localStorage.setItem("selectedBook", JSON.stringify(book));
        // Redirect to book details page
        window.location.href = "book-details.html";
    }

    // Initialize with all books
    displayBooks(featuredBooks, "featuredBookGrid");
    displayBooks(recommendedBooks, "recommendedBookGrid");
});
