// Q1 - Dynamic Product List Manager with Event Delegation
// Handles: Add, Edit (inline), Delete and auto-save on blur (clicking outside)

const productInput = document.getElementById('product-input');
const addProductBtn = document.getElementById('add-product-btn');
const productList = document.getElementById('product-list');

// Add new product to the list
function addProduct(name) {
    if (!name.trim()) return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = name.trim();

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    productList.appendChild(li);
}

// Handle Add button click
addProductBtn.addEventListener('click', () => {
    addProduct(productInput.value);
    productInput.value = '';
    productInput.focus();
});

// Allow adding by pressing Enter in input
productInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addProduct(productInput.value);
        productInput.value = '';
    }
});

// Event delegation for Edit and Delete buttons on the <ul>
productList.addEventListener('click', (event) => {
    const target = event.target;

    // Find the closest <li> from the clicked element
    const li = target.closest('li');
    if (!li) return;

    if (target.classList.contains('delete-btn')) {
        // Delete item
        productList.removeChild(li);
    } else if (target.classList.contains('edit-btn')) {
        // Edit item inline
        startEdit(li);
    }
});

// Start inline editing mode for a given <li>
function startEdit(li) {
    // Avoid creating multiple inputs if already editing
    if (li.querySelector('.edit-input')) return;

    const span = li.querySelector('.product-name');
    const originalText = span.textContent;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'edit-input';
    input.value = originalText;

    // Replace span with input temporarily
    li.replaceChild(input, span);
    input.focus();

    // On blur (clicking outside / focus lost) -> auto-save and exit edit mode
    input.addEventListener('blur', () => {
        finishEdit(li, input);
    });

    // Save on Enter
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            input.blur(); // triggers blur handler to save
        }
    });
}

// Finish editing: replace input with updated span
function finishEdit(li, input) {
    const newText = input.value.trim() || 'Untitled';

    const span = document.createElement('span');
    span.className = 'product-name';
    span.textContent = newText;

    li.replaceChild(span, input);
}
