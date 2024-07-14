const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-bar");
 
// hamburger.addEventListener("click", () => nav.classList.toggle("active"));

function menuHamburger() {
    // console.log('clicou');
    var menu_hamburger = document.querySelectorAll('.cabecalho-menu');

    if (menu_hamburger[0].style.display == 'none') {
        menu_hamburger[0].style.display = 'flex';
    } else {
        menu_hamburger[0].style.display = 'none';
    }
}





