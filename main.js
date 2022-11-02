const container = document.querySelector('#container');
const selColor = document.querySelector('#colorSel');
let boxWidth = 500;
if (screen.width < 600) {
    boxWidth = 300;
}
else {
    boxWidth = 500;
}

var color = 'black';

var length = boxWidth / 32;
// adding div elements
for (let i = 0; i < 1024; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.classList.add('Border');
    newDiv.style.cssText = 'background:white; width:' + length + 'px; height:' + length + 'px';
    container.style.cssText = `display:grid; grid-template-columns:repeat(32,1fr)`;

    container.appendChild(newDiv);
}


// building blocks dynamically
const number = document.querySelector('#gridNum');
const build = document.querySelector('#build').addEventListener('click', buildGrid);

function buildGrid() {
    container.innerHTML = '';

    let k = number.value;
    let width = boxWidth / k;
    let area = k * k;
    for (let i = 0; i < area; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.classList.add('Border');
        newDiv.style.cssText = 'background:white; width:' + width + 'px; height:' + width + 'px';

        container.appendChild(newDiv);
    }
    container.style.cssText = `display:grid; grid-template-columns:repeat(${k},1fr)`;
    container.childNodes.forEach((e) => {
        e.addEventListener('mouseover', colorChange);
    });

}

// changing colors of the div

function colorChange(e) {

    switch (sel) {
        case 0:
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            this.style.backgroundColor = `rgb( ${r}, ${g},${b})`;
            break;

        case 1:
            this.style.backgroundColor = '#000000';
            break;

        case 2:
            this.style.backgroundColor = 'white';
            break;
        case 3:
            let n = 2 + Math.floor(Math.random() * 250);
            this.style.backgroundColor = `rgb(${n},${n},${n})`;
            break;

        case 4:
            this.style.backgroundColor = `${color}`;
            break;

        default:
            break;
    }
}

container.childNodes.forEach((e) => {
    e.addEventListener('mouseover', colorChange);
});

// clear button
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const cl = document.querySelectorAll('.box');
    cl.forEach((e) => {
        e.style.backgroundColor = 'white';
    });
});



// removeBorder
const removeBorder = document.querySelector('#Border');
removeBorder.addEventListener('click', () => {
    const cl = document.querySelectorAll('.box');
    cl.forEach((e) => {
        e.classList.remove('Border');
    });
});

// blackAndWhite to coloured
let sel = 0;
const colorSelector = document.querySelector('#bnw');
const colorSelector2 = document.querySelector('#Colored');
const eraser = document.querySelector('#erase');
const grayPen = document.querySelector('#grey');

colorSelector.addEventListener('click', () => {
    sel = 1;
});
colorSelector2.addEventListener('click', () => {
    sel = 0;
});
eraser.addEventListener('click', () => {
    sel = 2;
});


grayPen.addEventListener('click', () => {
    sel = 3;
});

selColor.addEventListener('change', (e) => {
    sel = 4;
    color = e.target.value;
});




