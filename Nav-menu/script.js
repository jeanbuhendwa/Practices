let mainMenu = document.querySelector(".main-menu");
let openMenu = document.querySelector(".open-menu");
let closeMenu = document.querySelector(".close-menu");

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function hide(){
    mainMenu.style.top = '-100%'; 
}
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);