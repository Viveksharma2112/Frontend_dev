// Q10 – Registration Form Validation

$(document).ready(function () {
  const usedEmails = ["test@example.com", "user@domain.com"]; // simple in-memory "database"

  $("#registration-form").on("submit", function (e) {
    e.preventDefault(); // prevent default form submission

    let isValid = true;

    // Reset error messages and borders
    $(".error").text("");
    $("input").css("border", "");

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();

    // 1. Check Name field → not empty.
    if (!name) {
      $("#name-error").text("Name is required.");
      $("#name").css("border", "2px solid red"); // 5. Highlight invalid fields
      isValid = false;
    }

    // 2. Check Email field → valid format and uniqueness.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      $("#email-error").text("Email is required.");
      $("#email").css("border", "2px solid red");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email-error").text("Please enter a valid email address.");
      $("#email").css("border", "2px solid red");
      isValid = false;
    } else if (usedEmails.indexOf(email) !== -1) {
      $("#email-error").text("This email is already taken.");
      $("#email").css("border", "2px solid red");
      isValid = false;
    }

    // 3. Check Password → minimum 8 characters.
    if (!password) {
      $("#password-error").text("Password is required.");
      $("#password").css("border", "2px solid red");
      isValid = false;
    } else if (password.length < 8) {
      $("#password-error").text("Password must be at least 8 characters long.");
      $("#password").css("border", "2px solid red");
      isValid = false;
    }

    if (isValid) {
      // 4. Show success message if all fields valid.
      $("#result-msg").removeClass().addClass("success")
        .text("Registration successful! Welcome, " + name + ".");

      // Add email to used list so it cannot be reused
      usedEmails.push(email);

      // Clear fields
      $("#registration-form")[0].reset();
    } else {
      $("#result-msg").removeClass().text("");
    }
  });
});
