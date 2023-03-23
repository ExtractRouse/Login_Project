let d = document.querySelector('.button-block > .button-block__registration');
let c = document.querySelector('.blockStep-One');
let b = document.querySelector('.steps');
let buttonNext = document.querySelector('.button-block__next-width');
let stepThreeBlock = document.querySelector('.stepThree');
let paginationBtnLeft = document.querySelector('#btn-left');
let paginationBtnRight = document.querySelector('#btn-right');




d.onclick = (e) => {
   e.preventDefault();
   c.style.display = 'none';
   b.style.display = 'block'
}
buttonNext.onclick = (e) => {
   b.style.display = 'none';
   stepThreeBlock.style.display = 'block';
};

paginationBtnLeft.onclick = (e) => {
   paginationBtnLeft.style.width = '16px';

   paginationBtnLeft.style.height = '7px';
   paginationBtnLeft.style.backgroundColor = '#52c3ff';
   paginationBtnLeft.style.borderRadius = '5px';

   paginationBtnRight.style.width = "6px";
   paginationBtnRight.style.height = "7px";
   paginationBtnRight.style.backgroundColor = "gray";
   paginationBtnRight.style.borderRadius = "5px";f

}

paginationBtnRight.onclick = (e) => {
   paginationBtnLeft.style.width = '6px';
   paginationBtnLeft.style.height = '7px';
   paginationBtnLeft.style.backgroundColor = '#52c3ff';
   paginationBtnLeft.style.borderRadius = '5px';
   paginationBtnRight.style.width = '16px';

   paginationBtnRight.style.height = '7px';
   paginationBtnRight.style.backgroundColor = '#52c3ff';
   paginationBtnRight.style.borderRadius = '5px';
   paginationBtnLeft.style.backgroundColor = 'gray';
}