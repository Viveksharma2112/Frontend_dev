// Q8 - Custom Dropdown Using Only JavaScript (No <select> Tag)

const dropdown = document.getElementById('dropdown');
const dropdownBtn = document.getElementById('dropdown-btn');
const optionsContainer = document.getElementById('dropdown-options');
const options = Array.from(document.querySelectorAll('.option'));

// Toggle dropdown list
dropdownBtn.addEventListener('click', () => {
    optionsContainer.classList.toggle('hidden');
});

// Handle option click
options.forEach((opt) => {
    opt.addEventListener('click', () => {
        dropdownBtn.textContent = opt.textContent;
        optionsContainer.classList.add('hidden');
    });
});

// Use capturing phase to close dropdown when clicking outside
document.addEventListener(
    'click',
    (event) => {
        // If click is outside dropdown, close it
        if (!dropdown.contains(event.target)) {
            optionsContainer.classList.add('hidden');
        }
    },
    true // capture phase
);
