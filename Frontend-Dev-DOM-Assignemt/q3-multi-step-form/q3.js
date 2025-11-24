// Q3 - Multi-Step Form with Next/Back & Validation

const steps = Array.from(document.querySelectorAll('.step'));
const stepDots = Array.from(document.querySelectorAll('.step-dot'));
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const summarySection = document.getElementById('summary');
const formStepsContainer = document.getElementById('form-steps');
const summaryName = document.getElementById('summary-name');
const summaryEmail = document.getElementById('summary-email');
const summaryPassword = document.getElementById('summary-password');

let currentStep = 0;

// Initialize
showStep(currentStep);

function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.toggle('active', i === index);
    });
    stepDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    backBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
}

// Basic validators
function validateStep(index) {
    let isValid = true;

    if (index === 0) {
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
    } else if (index === 1) {
        const email = emailInput.value.trim();
        const emailRegex = /.+@.+\..+/;
        if (!email) {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
    } else if (index === 2) {
        const pwd = passwordInput.value;
        if (!pwd) {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (pwd.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }
    }

    return isValid;
}

nextBtn.addEventListener('click', () => {
    // Validate current step
    if (!validateStep(currentStep)) return;

    if (currentStep < steps.length - 1) {
        currentStep += 1;
        showStep(currentStep);
    } else {
        // All steps complete -> show summary
        summaryName.textContent = nameInput.value;
        summaryEmail.textContent = emailInput.value;
        summaryPassword.textContent = passwordInput.value;
        formStepsContainer.classList.add('hidden');
        summarySection.classList.remove('hidden');
    }
});

backBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep -= 1;
        showStep(currentStep);
    }
});
