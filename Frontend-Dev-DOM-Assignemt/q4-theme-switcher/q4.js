// Q4 - Theme Switcher Using Attribute Manipulation

const themeButtons = document.querySelectorAll('[data-theme-btn]');
const body = document.body;

themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme-btn');

        // Remove existing class and then add new using setAttribute
        let newClass = '';
        if (theme === 'light') {
            newClass = 'theme-light';
        } else if (theme === 'dark') {
            newClass = 'theme-dark';
        } else if (theme === 'blue') {
            newClass = 'theme-blue';
        }

        // Set body class using setAttribute
        body.setAttribute('class', newClass);

        // Store current theme in custom attribute
        body.setAttribute('data-theme', theme);
    });
});
