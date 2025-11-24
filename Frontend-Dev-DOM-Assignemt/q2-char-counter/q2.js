// Q2 - Live Character Counter with Warning and preventDefault()

const textarea = document.getElementById('message');
const counter = document.getElementById('char-counter');
const resetBtn = document.getElementById('reset-btn');
const MAX_CHARS = 100;

// Update the remaining characters and color based on length
function updateCounter() {
    const length = textarea.value.length;
    const remaining = MAX_CHARS - length;

    counter.textContent = `Remaining: ${remaining >= 0 ? remaining : 0}`;

    // Default color
    counter.style.color = '#333';

    if (remaining <= 20 && remaining > 0) {
        // Yellow warning
        counter.style.color = '#ff9800';
    } else if (remaining <= 0) {
        // Red warning
        counter.style.color = '#f44336';
    }
}

// Prevent further typing when limit reached
textarea.addEventListener('keydown', (event) => {
    const allowedKeys = [
        'Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Delete', 'Tab', 'Enter', 'Home', 'End'
    ];

    const length = textarea.value.length;

    if (length >= MAX_CHARS && !allowedKeys.includes(event.key)) {
        // No more characters allowed
        event.preventDefault();
    }
});

// Also handle paste / programmatic changes with input event
textarea.addEventListener('input', () => {
    if (textarea.value.length > MAX_CHARS) {
        textarea.value = textarea.value.slice(0, MAX_CHARS);
    }
    updateCounter();
});

// Reset everything
resetBtn.addEventListener('click', () => {
    textarea.value = '';
    updateCounter();
    textarea.focus();
});

// Initialize
updateCounter();
