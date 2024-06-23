const shareIcon = document.querySelector('.share-icon');
const shareDesktop = document.querySelector('.share__box');

shareIcon.addEventListener('click', () => {
    shareDesktop.classList.toggle('hidden');
})