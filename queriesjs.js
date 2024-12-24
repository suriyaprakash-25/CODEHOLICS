function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let query = document.getElementById("query").value;
    let errorMessage = document.getElementById("errorMessage");
    
    // Check if any field is empty
    if (name == "" || email == "" || query == "") {
      errorMessage.textContent = "All fields are required!";
      return false;
    }

    // Email validation using a basic regular expression
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      errorMessage.textContent = "Please enter a valid email address!";
      return false;
    }

    // If everything is valid, submit the form (just hide error message)
    errorMessage.textContent = "";
    alert("Query submitted successfully!");
    return true;
  }