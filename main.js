const body = document.querySelector('body');
const heart = document.querySelector('.heart');
const main = document.querySelector('.main');

let i = 0;

heart.addEventListener('click', () => {
    body.removeChild(main);
    body.style.backgroundColor = 'red';
    const container = document.createElement('div');
    container.classList.add('container');
    while(i < 8){
        const img = document.createElement('div');
        img.classList.add('place');
        container.appendChild(img);
        i++;
    }
    body.appendChild(container);
})
