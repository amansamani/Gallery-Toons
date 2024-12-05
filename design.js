const searchBar = document.querySelector('.search-bar');
const photos = document.querySelectorAll('.photo-gallery a');
const form = document.querySelector('form');
const searchButton = document.querySelector('.search');
const photoRequestForm = document.querySelector('#photorequest-form');

// Prevent form submission and trigger search
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    performSearch();
    });

    searchButton.addEventListener('click', () => {
    performSearch();
    });

    function performSearch() {
    const query = searchBar.value.trim().toLowerCase();
    let matchFound = false;

    photos.forEach((photo) => {
    const tags = photo.getAttribute('data-tags').toLowerCase();
    if (tags.includes(query)) {
        photo.classList.remove('hidden');
        matchFound = true;
    } else {
        photo.classList.add('hidden');
    }
    });

    

// Show or hide the photo request form
    if (!matchFound && query !== "") {
    photoRequestForm.style.display = 'flex';
    } else {
    photoRequestForm.style.display = 'none';
    }
    }

// Prevent default navigation and open images in a new tab
    photos.forEach((photo) => {
    photo.addEventListener('click', (event) => {
    const clickedElement = event.target;

// Check if click is on download logo
    if (clickedElement.closest('.downloadlogo')) {
    return; // Allow default download
    }

    event.preventDefault();
    const imageURL = photo.getAttribute('href');
    window.open(imageURL, '_blank');
    });
});