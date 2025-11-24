// Q6 - Real-Time Table Filter Using input Event

const searchBox = document.getElementById('search-box');
const tableBody = document.getElementById('student-body');
const noResultsText = document.getElementById('no-results');

searchBox.addEventListener('input', () => {
    const query = searchBox.value.trim().toLowerCase();
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    let visibleCount = 0;

    rows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();
        const isMatch = rowText.includes(query);

        row.style.display = isMatch ? '' : 'none';
        if (isMatch) visibleCount += 1;
    });

    if (visibleCount === 0) {
        noResultsText.classList.remove('hidden');
    } else {
        noResultsText.classList.add('hidden');
    }
});
