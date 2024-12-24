// Mouse movement effect for the login box
const loginBox = document.getElementById("loginBox");
document.addEventListener("mousemove", (event) => {
    let x = (event.clientX / window.innerWidth) * 20 - 10;
    let y = (event.clientY / window.innerHeight) * 20 - 10;
    loginBox.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg)`;
});

// Validation logic
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const navLink = document.getElementById("navLink");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => (error.style.display = "none"));

    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
    }

    if (ageInput.value < 18 || ageInput.value === "") {
        showError(ageInput, "You must be at least 18 years old.");
        isValid = false;
    }

    const usernameRegex = /^(?=.*[A-Z])(?=.*[_$!]).+$/;
    if (!usernameRegex.test(usernameInput.value)) {
        showError(usernameInput, "Username must contain at least one uppercase letter and one special character (_, $, or !).");
        isValid = false;
    }

    if (passwordInput.value !== "science") {
        showError(passwordInput, "Password must be 'science'.");
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
        navLink.style.display = "block";
        loginForm.reset();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
