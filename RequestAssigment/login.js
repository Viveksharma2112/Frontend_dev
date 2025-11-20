function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById("country").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("Confirmpassword").value;
    let terms = document.getElementById("terms").checked;

    let namePattern = /^(?![\d]+$)[A-Za-z\s'\-]+$/;
    if (!namePattern.test(name)) {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    let phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be 10 digits and start with 6-9.");
        return false;
    }

    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    if (country === "") {
        alert("Please select your country.");
        return false;
    }

    if (password === "" || confirmPassword === "") {
        alert("Please enter password in both fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // TERMS CHECK
    if (!terms) {
        alert("You must agree to the Terms and Conditions.");
        return false;
    }

    // Registration successful - send data to server
    let formData = {
        name: name,
        email: email,
        phone: phone,
        gender: gender.value,
        country: country,
        password: password
    };

    console.log("=== SENDING REGISTRATION DATA ===");
    console.log("Form Data:", formData);

    fetch('http://localhost:3000/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("\n=== SERVER RESPONSE ===");
        console.log("Success! Data saved to db.json:");
        console.log(data);
        console.log("Response ID:", data.id);
        console.log("==================\n");
        alert("Registration Successful! Data saved to db.json");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Registration successful but error saving to server: " + error.message);
    });

    return false; // Prevent form submission
}