document.addEventListener("DOMContentLoaded", function () {
    // Clear the authentication token or session data
    localStorage.removeItem('authToken');

    // Redirect to the login page after a short delay
    setTimeout(() => {
        window.location.href = 'loginpage.html';
    }, 800); // 1 second delay for a smooth transition
});