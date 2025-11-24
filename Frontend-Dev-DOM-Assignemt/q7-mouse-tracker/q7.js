// Q7 - Detect Mouse Path & Coordinates Logger

const box = document.getElementById('box');
const coordsDisplay = document.getElementById('coords');

// Update coordinates when mouse moves inside box
box.addEventListener('mousemove', (event) => {
    coordsDisplay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

// On double-click, drop a red dot at that position
box.addEventListener('dblclick', (event) => {
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    box.appendChild(dot);
});
