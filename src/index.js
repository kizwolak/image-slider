import './style.css';
import img3 from './1667850183379463.png';
import img2 from './1662935313634261298.jpg';
import img1 from './jerzyurban-biskup655.png';

const slide = document.querySelector('.slide');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
console.log(slide);
const img0 = new Image();
img0.src = img1;
slide.appendChild(img0);
const img4 = new Image();
img4.src = img2;
slide.appendChild(img4);
const img5 = new Image();
img5.src = img3;
slide.appendChild(img5);
const allImgs = document.querySelectorAll('img');
img0.style.display = 'block';
leftButton.addEventListener('click', () => {
    img0.style.transition = '1s ease';
    img0.style.transform = 'translateX(-110%)';
    setTimeout(function() {img0.style.display = 'none'}, 300);
});