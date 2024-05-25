// script.js
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    
    likeButton.addEventListener('click', () => {
        const heart = document.createElement('span');
        heart.classList.add('heart', 'flow-heart');
        heart.innerHTML = '&#9829;';
        likeButton.appendChild(heart);

        // Remove the heart after the animation is complete
        heart.addEventListener('animationend', () => {
            heart.remove();
        });

        // Optionally, add a class to scale the original heart for click feedback
        likeButton.querySelector('.heart').classList.add('scale-heart');
        setTimeout(() => {
            likeButton.querySelector('.heart').classList.remove('scale-heart');
        }, 300); // duration should match the CSS transition
    });
});
