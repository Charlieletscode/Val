const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    // Switch to fixed so it can move relative to the whole screen
    noBtn.style.position = 'fixed';

    // Calculate the entire screen width and height
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Generate random coordinates anywhere on the page
    // Subtracting button size so it doesn't create scrollbars
    const randomX = Math.floor(Math.random() * (screenWidth - noBtn.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - noBtn.offsetHeight));

    // Apply the coordinates
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

function celebrate() {
    alert("Yay! Best Valentine's ever! ❤️");
    // Change the screen or redirect here
}

const gallery = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('enlargedImg');

// List your images here
const myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']; 
const folder = 'c&T/';

myImages.forEach(imgName => {
    const div = document.createElement('div');
    div.className = 'polaroid';
    
    // Add an onclick event to each polaroid
    div.innerHTML = `
        <img src="${folder}${imgName}" alt="Memory" onclick="enlargeImage('${folder}${imgName}')">
        <p>Us ❤️</p>
    `;
    gallery.appendChild(div);
});

// Function to pop the image up
function enlargeImage(src) {
    modal.style.display = "block";
    modalImg.src = src;
}

// Function to close it
function closeModal() {
    modal.style.display = "none";
}

// Close if they click anywhere outside the photo
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}