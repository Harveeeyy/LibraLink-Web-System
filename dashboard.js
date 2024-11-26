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

// Function to handle search functionality
function searchFunction() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    
    // Filter the books based on the input query
    const filteredBooks = books.filter(book => book.toLowerCase().includes(query));
    
    // Display results
    const resultsContainer = document.getElementById("searchResults");
    if (resultsContainer) {
        resultsContainer.innerHTML = ''; // Clear previous results
    } else {
        const newResultsContainer = document.createElement('ul');
        newResultsContainer.id = "searchResults";
        document.body.appendChild(newResultsContainer);
    }

    const resultsList = document.getElementById("searchResults");

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const li = document.createElement("li");
            li.textContent = book;
            resultsList.appendChild(li);
        });
    } else {
        const noResultsMessage = document.createElement("li");
        noResultsMessage.textContent = "No results found.";
        resultsList.appendChild(noResultsMessage);
    }
}
