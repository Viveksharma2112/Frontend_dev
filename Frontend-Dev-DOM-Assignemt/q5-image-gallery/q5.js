// Q5 - Image Gallery with Modal Preview using event.stopPropagation()

const galleryImages = document.querySelectorAll('.gallery-img');
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');

// Open modal with clicked image
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        modalImage.setAttribute('src', src.replace(/\/200\/150/, '/600/400'));
        modalOverlay.classList.remove('hidden');
    });
});

// Click outside modal-content closes modal
modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

// Prevent clicks inside modal-content from closing the modal
document.querySelector('.modal-content').addEventListener('click', (event) => {
    event.stopPropagation();
});
