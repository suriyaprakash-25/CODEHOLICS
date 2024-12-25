// Get the query parameters from the URL
const params = new URLSearchParams(window.location.search);
const bookName = params.get('name');
const bookPrice = params.get('price');

// Display the book details in the HTML
document.getElementById('bookName').textContent = bookName;
document.getElementById('bookPrice').textContent = bookPrice;

// Set the hidden input fields for form submission
document.getElementById('hiddenBookName').value = bookName;
document.getElementById('hiddenBookPrice').value = bookPrice;
