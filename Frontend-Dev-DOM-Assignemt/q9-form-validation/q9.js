// Q9 - Form Submit Blocker with preventDefault() and Live Errors

const form = document.getElementById('signup-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const successMsg = document.getElementById('success-msg');

function validateName() {
    const value = nameField.value.trim();
    if (!value) {
        nameError.textContent = 'Name is required.';
        return false;
    }
    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const value = emailField.value.trim();
    const emailRegex = /.+@.+\..+/;

    if (!value) {
        emailError.textContent = 'Email is required.';
        return false;
    }
    if (!emailRegex.test(value)) {
        emailError.textContent = 'Please enter a valid email.';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    const value = passwordField.value;
    if (!value) {
        passwordError.textContent = 'Password is required.';
        return false;
    }
    if (value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

// On submit: validate all fields, prevent submit if invalid
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Block actual submission

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        successMsg.classList.remove('hidden');
    } else {
        successMsg.classList.add('hidden');
    }
});

// Live validation - errors disappear automatically
nameField.addEventListener('input', () => {
    validateName();
    successMsg.classList.add('hidden');
});

emailField.addEventListener('input', () => {
    validateEmail();
    successMsg.classList.add('hidden');
});

passwordField.addEventListener('input', () => {
    validatePassword();
    successMsg.classList.add('hidden');
});
