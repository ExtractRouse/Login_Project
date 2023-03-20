let d = document.querySelector('.button-block > .button-block__registration');
let c = document.querySelector('.blockStep-One');
let b = document.querySelector('.steps');

console.log(c);
console.log(y);


d.onclick = (e) => {
   e.preventDefault();
   c.style.display = 'none';
   b.style.display = 'block'
}
