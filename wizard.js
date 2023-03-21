let d = document.querySelector('.button-block > .button-block__registration');
let c = document.querySelector('.blockStep-One');
let b = document.querySelector('.steps');
let buttonNext = document.querySelector('.button-block__next-width');
let stepThreeBlock = document.querySelector('.stepThree');




d.onclick = (e) => {
   e.preventDefault();
   c.style.display = 'none';
   b.style.display = 'block'
}
buttonNext.onclick = (e) => {
   b.style.display = 'none';
   stepThreeBlock.style.display = 'block';
}
