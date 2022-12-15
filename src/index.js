import './style.css';



const slide = document.querySelector('.slide');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
const allImgs = document.querySelector('img');

rightButton.addEventListener('click', () => {
    allImgs.style.transition = '1s ease';
    allImgs.style.transform = 'translateX(110%)';
});