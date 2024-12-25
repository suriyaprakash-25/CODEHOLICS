// Updated function to handle showing all categories or specific ones
function showCategory(category) {
    const allCategories = ['humanOrganModels', 'books', 'charts'];
    
    // If Show All is clicked, display all categories
    if (category === 'all') {
        allCategories.forEach(function(cat) {
            const elements = document.querySelectorAll(`.${cat}`);
            elements.forEach(function(element) {
                element.style.display = 'block';  // Show all products
            });
        });
    } else {
        // Show only the selected category and hide others
        allCategories.forEach(function(cat) {
            const elements = document.querySelectorAll(`.${cat}`);
            elements.forEach(function(element) {
                if (cat === category) {
                    element.style.display = 'block';  // Show selected category
                } else {
                    element.style.display = 'none';   // Hide other categories
                }
            });
        });
    }
}


    // Function to sort products by name or price
    function sortProducts(criteria) {
        const productCards = Array.from(document.querySelectorAll('.product-card'));
        
        // Sort by Name (A-Z, Z-A)
        if (criteria === 'a-z') {
            productCards.sort((a, b) => {
                return a.querySelector('h3').innerText.localeCompare(b.querySelector('h3').innerText);
            });
        } else if (criteria === 'z-a') {
            productCards.sort((a, b) => {
                return b.querySelector('h3').innerText.localeCompare(a.querySelector('h3').innerText);
            });
        }
        // Sort by Price (Low to High, High to Low)
        else if (criteria === 'low-high') {
            productCards.sort((a, b) => {
                return parseFloat(a.querySelector('.price').dataset.price) - parseFloat(b.querySelector('.price').dataset.price);
            });
        } else if (criteria === 'high-low') {
            productCards.sort((a, b) => {
                return parseFloat(b.querySelector('.price').dataset.price) - parseFloat(a.querySelector('.price').dataset.price);
            });
        }
        
        // Re-render sorted products
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = '';  // Clear the existing products
        productCards.forEach(card => mainContent.appendChild(card));  // Add sorted cards
    }

    // Show Human Organ Models by default
    showCategory('humanOrganModels');
