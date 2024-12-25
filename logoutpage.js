document.addEventListener("DOMContentLoaded", function () {
    // Clear the authentication token or session data
    console.log('Removing authToken...');
    localStorage.removeItem('authToken');

    // Log before redirect
    console.log('Redirecting to login page...');

    // Redirect to the login page after a short delay
    setTimeout(() => {
        console.log('Navigating to loginpage.html');
        // Using replace() instead of href ensures the user cannot return to the current page using the back button
        window.location.replace('loginpage.html');
    }, 1000); // 1 second delay for a smooth transition
});
