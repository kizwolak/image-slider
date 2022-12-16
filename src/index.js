import './style.css';
import img6 from './1667850183379463.png';
import img5 from './1662935313634261298.jpg';
import img4 from './jerzyurban-biskup655.png';

const slide = document.querySelector('.slide');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
const img = [];
console.log(slide);
const img0 = new Image();
img0.src = img6;
img.push(img0);
slide.appendChild(img0);
const img1 = new Image();
img1.src = img5;
img.push(img1);
slide.appendChild(img1);
const img2 = new Image();
img2.src = img4;
slide.appendChild(img2);
img.push(img2);
let i = 0;
img[i].style.display = 'block';
img[i].style.transform = 'translateX(0%)';

leftButton.addEventListener('click', () => {
    img[i].style.zIndex = '-1';
    img[i].style.transition = '1s ease';
    img[i].style.transform = 'translateX(-100%)';
    img[i+1].style.transition = '0s ease';
    img[i+1].style.transform = 'translateX(100%)';
    setTimeout(function () {
        img[i].style.display = 'none';
        img[i].style.transform = 'translateX(100%)';
        img[i].style.zIndex = '0';
        img[i+1].style.display = 'block';
    }, 1000);
    setTimeout(function () {
        if (i == (img.length - 1) ) {
            i = 0;
            img[i].style.display = 'block';
            img[i].style.transition = '2s ease';
            img[i].style.transform = 'translateX(0%)';
            return;
        } else {
            img[i+1].style.transition = '2s ease';
            img[i+1].style.transform = 'translateX(0%)';
            return i += 1;
        }
    }, 6000);

});

rightButton.addEventListener('click', () => {
    img[i].style.zIndex = '-1';
    img[i].style.transition = '1s ease';
    img[i].style.transform = 'translateX(100%)';
    img[i+1].style.transition = '0s ease';
    img[i+1].style.transform = 'translateX(-100%)';
    setTimeout(function () {
        img[i].style.display = 'none';
        img[i].style.transform = 'translateX(-100%)';
        img[i].style.zIndex = '0';
        img[i+1].style.display = 'block';
    }, 1000);
    setTimeout(function () {
        if (i == (img.length - 1) ) {
            i = 0;
            img[i].style.display = 'block';
            img[i].style.transition = '2s ease';
            img[i].style.transform = 'translateX(0%)';
            return;
        } else {
            img[i+1].style.transition = '2s ease';
            img[i+1].style.transform = 'translateX(0%)';
            return i += 1;
        }
    }, 6000);

});